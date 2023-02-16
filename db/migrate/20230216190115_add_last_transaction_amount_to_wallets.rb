class AddLastTransactionAmountToWallets < ActiveRecord::Migration[7.0]
  def change
    add_column :wallets, :last_transaction_amount, :integer
  end
end
