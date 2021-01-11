@day_performances.includes(:day, performance: :exercise).each do |day_performance|

    json.dayPerformances do 
        json.set! day_performance.id do 
            json.partial! 'api/day_performances/day_performance', day_performance: day_performance
        end
    end

    json.days do 
        json.set! day_performance.day.id do
            json.extract! day_performance.day, :id, :name
            json.userId day_performance.day.user_id

        end
    end

    json.performances do 
        json.set! day_performance.performance.id do
            json.extract! day_performance.performance, :id, :weight, :duration, :rest_time, :sets, :repetitions, :active
            json.userId day_performance.performance.user_id
            json.exerciseId day_performance.performance.exercise_id
        end
    end

    json.exercises do
        json.set! day_performance.performance.exercise.id do 
            json.extract! day_performance.performance.exercise, :id, :name, :description
            json.userId day_performance.performance.exercise.user_id 
        end
    end



end
