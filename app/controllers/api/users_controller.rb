class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index 
    
    @users = User.where(trainer_id: current_user.id)
    return :index

  end

  def update 
    debugger
    @user = User.find(params[:id])
    if @user.update({trainer_id: params[:user][:trainer_id]}) 
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

  end


  def show 
    # return the trainer 
    @user = User.find(params[:id])
  end

  def search 
    @user = User.find_by(username: user_params[:username])
    
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :trainer_id)
  end
end
