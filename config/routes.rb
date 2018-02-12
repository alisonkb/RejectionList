Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  resources :home, only: [:index], :path => "/"
  resources :users, only: [:create, :index]
  resource :session, only: [:create, :destroy]
  resources :classlist, only: [:index]
end
