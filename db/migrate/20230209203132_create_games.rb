class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :description
      t.string :genre
      t.string :price
      t.string :developer
      t.string :release_date
      t.string :image
      t.timestamps
    end
  end
end
