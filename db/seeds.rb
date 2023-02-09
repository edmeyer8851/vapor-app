# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

puts "Getting games..."

def games_data
    games = RestClient.get("https://www.freetogame.com/api/games")
    games_array = JSON.parse(games)
    puts "Seeding games..."
    games_array.each do |game|
        Game.create(
            title: game["title"],
            description: game["short_description"],
            genre: game["genre"],
            price: rand(5..60),
            developer: game["developer"],
            release_date: game["release_date"],
            image: game["thumbnail"]
        )
    end
end

games_data()
puts "Done seeding, glhf!"
