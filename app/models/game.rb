class Game < ApplicationRecord
    validates :title, :price, presence: true

    has_many :user_games
    has_many :users, through: :user_games
end
