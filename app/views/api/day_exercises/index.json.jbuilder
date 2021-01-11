@day_exercises.each do |day_exercise|

    json.set! day_exercise.id do 
        json.partial! 'api/day_exercises/day_exercise', day_exercise: day_exercise
    end


end
