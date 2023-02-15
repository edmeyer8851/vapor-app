class User < ApplicationRecord
    has_secure_password
    validates :email, :username, :password_digest, presence: true
    validates :username, uniqueness: true

    has_many :user_games, dependent: :destroy
    has_many :games, through: :user_games
    has_one :wallet
end
