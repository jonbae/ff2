@performances.includes(:exercise).each do |performance| 
    json.performances do 
        json.set! performance.id do 
            json.partial! 'api/performances/performance' , performance: performance
        end
    end

    json.exercises do 
        json.set! performance.exercise.id do 
            json.extract! performance.exercise, :id, :name, :description
        end

    end

end



