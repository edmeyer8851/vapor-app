class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :image, :genre
end
