#active:true
@days.includes(:day_exercises ,exercises: :performances).where(exercises:{performances:{user_id: @current_user.id}}).each do |day| 

    day.day_exercises.each do |day_exercise| 
        json.dayExercises do 
            json.set! day_exercise.id do 
                json.extract! day_exercise, :id
                json.exerciseId day_exercise.exercise_id
                json.dayId day_exercise.day_id
            end
        end
    end

    day.exercises.each do |exercise| 
        exercise.performances.each do |performance| 

            json.days do 
                json.set! day.id do 
                    json.partial! 'api/days/day', day: day
                end
            end

            json.exercises do 
                json.set! exercise.id do 
                    json.extract! exercise, :id, :name, :description
                end

            end



            json.performances do 
                json.set! performance.id do 
                    json.extract! performance,  :id, :weight, :duration, :rest_time, :sets, :repetitions, :active
                    json.exerciseId performance.exercise_id
                end
            end
        
        end
    end
end