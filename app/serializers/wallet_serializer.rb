class WalletSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :balance, :last_transaction_amount
end
