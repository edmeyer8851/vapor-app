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

end
