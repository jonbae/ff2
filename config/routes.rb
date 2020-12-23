Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:index, :show, :create]
    resources :reviews, only: [:create]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resource :favorites, only: [:create, :destroy]
    resources :exercises, except: [:new, :edit] 
    resources :exercises do 
      collection { post :import}
    end


    
  end

  root "static_pages#root"
end
