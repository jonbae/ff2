class Api::DayExercisesController < ApplicationController
    before_action :require_logged_in
    
    def create 
        @day_exercises = DayExercise.new(day_exercises_params)
        if @day_exercises.save 
            render :show
        else

            render json:@day_exercises.errors.full_messages, status: 422
        end
    end

    def index 
        
        # unless params[:day_exercise].nil? 
            
        # else
            @day_exercises = @current_user.day_exercises_through_days
        # end


    end

    def destroy
        @day_exercise = DayExercise.find(params[:id])
        @day_exercise.destroy
        render json:@day_exercise 

    end

    private 
    def day_exercises_params 
        params.require(:day_exercises).permit(:id, :exercise_id, :day_id)
    end


end
