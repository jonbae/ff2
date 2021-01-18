Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update]
    resources :users do 
      collection { get :search}
    end
    resource :session, only: [:create, :destroy, :show]

    resources :exercises, except: [:new, :edit] 
    resources :exercises do 
      collection { post :import}
    end

    resources :performances, only: [:create, :destroy, :index, :show]
    resources :days, only: [:create, :destroy, :index, :show]
    resources :day_exercises, only: [:create, :destroy, :index]
    resources :day_performances, only: [:create, :destroy, :index]

    
  end

  root "static_pages#root"
end
