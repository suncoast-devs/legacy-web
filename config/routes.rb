Rails.application.routes.draw do
  root 'home#index'

  resources :invitations, only: [:create]
  get '/meetup/group/:id' => 'meetup#group', as: :meetup_group
  get '/conduct' => 'home#conduct', as: :code_of_conduct
  resource :contact, only: [:create, :show]
end
