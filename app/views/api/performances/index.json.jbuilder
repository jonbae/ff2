# json.performances do 
    @performances.each do |performance| 
        json.set! performance.id do 
            json.partial! 'api/performances/performance' , performance: performance
        end
    end
# end
