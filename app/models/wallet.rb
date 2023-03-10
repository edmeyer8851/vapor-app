class Wallet < ApplicationRecord
    validates :user_id, :balance, :last_transaction_amount, presence: true
    validates :balance, numericality: { greater_than_or_equal_to: 0}
    belongs_to :user
end
