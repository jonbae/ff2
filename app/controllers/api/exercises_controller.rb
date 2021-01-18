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

    # requires metaprogramming 
    # def add_or_find(params)
    #     if class_name.exists?(params)
    #         data = class_name.find_by(params)
    #     else
    #         data = class_name.new(params)
    #         data.save!
    #     end
    # end


    def import 
        tempfile = params['file'].tempfile
        datasheet = Roo::Spreadsheet.open(tempfile)
        headers = datasheet.row(1) #get header row
        
        
        datasheet.each_with_index do |row, idx|
            next if idx == 0 # skip header
            # create hash from headers and cells
            data = Hash[[headers, row].transpose]
            
            puts data

            exercise_data = {
                name: data['exercise_name'], 
                description: data['description'],
                user_id: params[:trainer_id]
            }

            if Exercise.exists?(name: exercise_data[:name], user_id: params[:trainer_id])
                # puts "Exercise with name '#{exercise_data[:name]}' already exists"
                # next 
                
                exercise = Exercise.find_by(name: exercise_data[:name])
            else 
                #how does rails/db handle new if it already exists? 
                exercise = Exercise.new(exercise_data)
                exercise.save!
            end
                

            performance_data = {
                sets: data['sets'], 
                repetitions: data['repetitions'], 
                rest_time: data['rest_time'], 
                duration: data['duration'],
                weight: data['weight'],
                exercise_id: exercise.id,
                user_id: params[:trainee_id]
            }

            if Performance.exists?(
                sets: performance_data[:sets], 
                repetitions: performance_data[:repetitions], 
                rest_time: performance_data[:rest_time], 
                duration: performance_data[:duration],
                weight: performance_data[:weight],
                user_id: params[:trainee_id]
                )
                
                performance = Performance.find_by(
                    sets: performance_data[:sets], 
                    repetitions: performance_data[:repetitions], 
                    rest_time: performance_data[:rest_time], 
                    duration: performance_data[:duration],
                    weight: performance_data[:weight],
                    user_id: params[:trainee_id]
                )
            else
                performance = Performance.new(performance_data)
                performance.save! 
            end

            day_data = {
                name: data['day_name'],
                user_id: params[:trainee_id]
            }
            
            if Day.exists?(name: day_data[:name], user_id: params[:trainee_id])
                
                day = Day.find_by(name: day_data[:name], user_id: params[:trainee_id])
            else
                day = Day.new(day_data)
                day.save!
            end

            day_performance_data = { 
                performance_id: performance.id,
                day_id: day.id
            }

            if DayPerformance.exists?(                
                performance_id: performance.id,
                day_id: day.id,
            )
                day_performance = DayPerformance.find_by(
                    performance_id: performance.id,
                    day_id: day.id,
                )
            else
                day_performance = DayPerformance.new(day_performance_data)
                day_performance.save!
            end


        end

        @exercises = Exercise.where(user_id: @current_user.id)
        render :index
    end




    private 
    def exercise_params
        params.require(:exercise).permit(:id, :name, :description, :user_id )
    end

end