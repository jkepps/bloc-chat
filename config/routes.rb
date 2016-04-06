Rails.application.routes.draw do
  resources :chat_rooms, only: [:create, :show, :index] do
  	resources :messages, only: [:create]
  end

  get "/*path" => 'application#angular'

  root to: 'application#angular'
end