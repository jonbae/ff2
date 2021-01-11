class Api::DaysController < ApplicationController
    before_action :require_logged_in

    def create
        @day = Performance.new(day_params)
        if @day.save 
            render :show 
        else 
            render json:@day.errors.full_messages, status: 422
        end

    end


    def index 

        @days = Day.where(user_id: @current_user.id)
        # @day_exercises = DayExercise.where(day_id: @day)
    end

    def show 
        @day = current_user.days.find(params[:id])
        @day.user_id = current_user.id

        if @day.save!
            render :show
        else
            render json:@day.errors.full_messages, status: 422
        end
    end




    def destroy
        @day = Day.find(params[:id])
        @day.destroy
        render json:@day
    end



    private 
    def day_params 
        params.require(:day).permit(:id, :name, :user_id)
    end

end
