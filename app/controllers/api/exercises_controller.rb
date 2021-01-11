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
        @performances = @exercise.performances 
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
        datasheet = Roo::Spreadsheet.open(tempfile)
        headers = datasheet.row(1) #get header row
        debugger

        datasheet.each_with_index do |row, idx|
            next if idx == 0 # skip header
            # create hash from headers and cells
            data = Hash[[headers, row].transpose]
            debugger
            puts data

            exercise_data = {
                name: data['name'], 
                description: data['description'],
                user_id: @current_user.id
            }

            # performance_data = {
            #     sets: data['sets'], 
            #     repetitions: data['repetitions'], 
            #     rest_time: data['rest_time'], 
            # }


            if Exercise.exists?(name: exercise_data['name'])
                puts "Exercise with name '#{exercise_data['name']}' already exists"
                next 
            end
            debugger
            #how does rails/db handle new if it already exists? 
            exercise = Exercise.new(exercise_data)
            debugger
            puts "saving '#{exercise.name}' with user_id #{exercise.user_id}"
            exercise.save!

            debugger

            # performance_data = {
            #     sets: data['sets'], 
            #     repetitions: data['repetitions'], 
            #     rest_time: data['rest_time'], 
            #     exercise_id: exercise.id 
            #     user_id: 
            # }

            # performance = Performance.new(performance_data)

            # performance.save! 


        end

        @exercises = Exercise.where(user_id: @current_user.id)
        render :index
    end




    private 
    def exercise_params
        params.require(:exercise).permit(:id, :name, :description, :user_id )
    end

end