json.exercise do 
    json.partial! 'api/exercises/exercise', exercise: @exercise
end

if @performances  
    json.performances do 
        
        @performances.each do |performance| 
            json.set! performance.id do 
                json.extract! performance, :id, :exercise_id, :user_id, :weight, :duration, :rest_time, :sets, :repetitions
            end
        end
    end
end