class Api::PerformancesController < ApplicationController
    before_action :require_logged_in

    def create
        @performance = Performance.new(performance_params)
        if @performance.save 
            render :show 
        else 
            render json:@performance.errors.full_messages, status: 422
        end

    end

    def show
        # exercise = current_user.exercises.find(params[:exercise][:id])
        # @performance = 

    end

    def index 
        
        if !params[:exercise].nil?
            exercise = Exercise.find(exercise_params[:id])
            @performances = exercise.performances
            
        else
            
            @performances = Performance.where(user_id: @current_user.id)
        end
        
    end


    def destroy
        @performance = Performance.find(params[:id])
        @performance.destroy
        render json:@performance
    end



    private 
    def performance_params
        params.require(:performance).permit(:id, :exercise_id, :user_id, :duration, :weight, :rest_time, :repetitions, :sets)
    end

    def exercise_params 
        params.require(:exercise).permit(:id, :name, :description)
    end

end
