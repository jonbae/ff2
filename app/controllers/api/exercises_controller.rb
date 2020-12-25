class Api::ExercisesController < ApplicationController
    require 'roo'
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
        debugger
        @performances = @exercise.performances 
        debugger
        if @exercise.save!
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

    def import 
        tempfile = params['file'].tempfile
        data = Roo::Spreadsheet.open(tempfile)
        headers = data.row(1) #get header row
        

        data.each_with_index do |row, idx|
            next if idx == 0 # skip header
            # create hash from headers and cells
            exercise_data = Hash[[headers, row].transpose]
            puts exercise_data
            if Exercise.exists?(name: exercise_data['name'])
                puts "Exercise with name '#{exercise_data['name']}' already exists"
                next 
            end
            exercise = Exercise.new(exercise_data)
            puts "saving '#{exercise.name}' with user_id #{exercise.user_id}"
            exercise.save!
        end

        @exercises = Exercise.where(user_id: @current_user.id)
        render :index
    end




    private 
    def exercise_params
        params.require(:exercise).permit(:id, :name, :description, :user_id )
    end

end