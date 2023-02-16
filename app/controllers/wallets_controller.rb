class WalletsController < ApplicationController

    def show
        wallet = find_wallet
        render json: wallet, status: :ok
        rescue ActiveRecord::RecordNotFound => invalid
            errors_arr = invalid.record.errors.map{|key,value| "#{key}: #{value}"}
            render json: { errors: errors_arr }, status: :not_found
    end

    def create
        wallet = Wallet.create!(wallet_params)
        render json: wallet, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
            errors_arr = invalid.record.errors.map{|key,value| "#{key}: #{value}"}
            render json: { errors: errors_arr }, status: :unprocessable_entity
    end

    def update
        wallet = find_wallet
        wallet.update!(:balance => wallet.balance + wallet_params[:last_transaction_amount])
        render json: wallet, status: :accepted
        rescue ActiveRecord::RecordInvalid => invalid
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    private

    def find_wallet
        Wallet.find_by user_id: params[:id]
    end

    def wallet_params
        params.permit(:user_id, :balance, :last_transaction_amount)
    end

end
