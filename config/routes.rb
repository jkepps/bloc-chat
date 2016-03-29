Rails.application.routes.draw do
  root to: 'application#angular'

  resources :chat_rooms, only: [:create, :show, :index] do
  	resources :messages, only: [:create]
  end

end