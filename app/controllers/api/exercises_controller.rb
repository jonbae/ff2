class Api::ExercisesController < ApplicationController
    before_action :require_logged_in

    def create 
        @exercise = Exercise.new(exercise_params)

        @exercise.user_id = current_user.id
        if @exercise.save 
            render :show
        else
            render json:@exercise.errors.full_messages, status: 422
        end
    end

    def index 
        @exercises = Exercise.where(user_id: @current_user.id)
    end

    def show 
        @exercise = current_user.exercises.find(params[:id])
        @exercise.user_id = current_user.id
        
        if @exercise
            render :show
        else
            render json:@exercise.errors.full_messages, status: 422
        end

    end

    def update 
        @exercise = current_user.exercises.find(params[:id])
        if @exercise.update(exercise_params)
            render :show 
        else 
            render json: @exercise.errors.full_messages, status: 422
        end
        
    end

    def destroy 
        @exercise = current_user.exercises.find(params[:id])
        @exercise.destroy
        render json:@exercise 
    end




    private 
    def exercise_params
        params.require(:exercise).permit(:id, :description, :name, :repititions, :rest_time, :sets, :user_id )
    end

end