class UserGamesController < ApplicationController

    def create
        user_game = UserGame.create!(user_game_params)
        render json: user_game, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
            errors_arr = invalid.record.errors.map{|key,value| "#{key}: #{value}"}
            render json: { errors: errors_arr }, status: :unprocessable_entity
    end

    def destroy
        user_game = UserGame.find(params[:id])
        if user_game
            user_game.delete
            head :no_content
        else
            render json: { error: ["Game not found."]}, status: :not_found
        end
    end

    private
    def user_game_params
        params.permit(:user_id, :game_id)
    end

end
