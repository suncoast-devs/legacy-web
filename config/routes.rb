Rails.application.routes.draw do
  root 'home#index'

  resources :invitations, only: [:create]
end
