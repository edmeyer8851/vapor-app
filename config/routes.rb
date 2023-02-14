Rails.application.routes.draw do
  resources :wallets
  resources :user_games, only: [:index, :create, :destroy]
  resources :users
  resources :games, only: [:index, :show]

  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  delete 'logout', to: 'sessions#destroy'

end
