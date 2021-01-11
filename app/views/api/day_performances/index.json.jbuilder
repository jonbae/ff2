@day_performances.each do |day_performance|

    json.set! day_performance.id do 
        json.partial! 'api/day_performances/day_performance', day_performance: day_performance
    end


end
