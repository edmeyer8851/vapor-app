class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: { 
            id: user.id, 
            username: user.username,
        }, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def show
        user = User.find(session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: { error: "User not logged in" }, status: :unauthorized
        end
    end

    private
    def user_params
        params.permit(:email, :username, :password, :password_confirmation)
    end

end
