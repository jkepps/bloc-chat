Rails.application.routes.draw do
  resources :chat_rooms, only: [:create, :show, :index] do
  	resources :messages, only: [:create]
  end

  get "/*path" => redirect("/?goto=%{path}")

  root to: 'application#angular'
end