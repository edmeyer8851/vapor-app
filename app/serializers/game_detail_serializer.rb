class GameDetailSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :image, :description, :genre, :developer, :release_date
end
