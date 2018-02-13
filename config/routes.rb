Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#root'
  namespace :api, default: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :index]
    resources :classlist, only: [:index]
  end
end
