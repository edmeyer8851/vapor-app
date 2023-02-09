Rails.application.routes.draw do
  resources :games
  get '/hello', to: 'application#hello_world'
end
