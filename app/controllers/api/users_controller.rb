class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  # def show
  #   @user = User.find(params[:id])
  #   render :profile
  # end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :profile
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private
  def user_params
    params.require(:user).permit(:username, :password, :image)
  end

end