Rails.application.routes.draw do
  root 'home#index'

  resources :invitations, only: [:create]

  get '/organizations' => 'organizations#index', as: :organizations
  get '/meetup/group/:id' => 'meetup#group', as: :meetup_group
end
