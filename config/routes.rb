Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]

    resources :exercises, except: [:new, :edit] 
    resources :exercises do 
      collection { post :import}
    end

    resources :performances, only: [:create, :destroy, :index, :show]


    
  end

  root "static_pages#root"
end
