class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games, status: :ok
    end

    def show
        game = Game.find(params[:id])
        if game
            render json: game, serializer: GameDetailSerializer, status: :ok
        else
            render json: { error: "Game not found"}, status: :not_found
        end
    end

    def create
        game = Game.create!(game_params)
        render json: game, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
            errors_arr = invalid.record.errors.map{|key,value| "#{key}: #{value}"}
            render json: { errors: errors_arr }, status: :unprocessable_entity
    end

    private
    def game_params
        params.permit(:title, :price)
    end

end
