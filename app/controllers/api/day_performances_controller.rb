class Api::DayPerformancesController < ApplicationController
    before_action :require_logged_in
    
    def create 
        @day_performances = DayPerformance.new(day_performances_params)
        if @day_performances.save 
            render :show
        else

            render json:@day_performances.errors.full_messages, status: 422
        end
    end

    def index 
        
        if params[:traineeId].nil?
            @day_performances = @current_user.day_performances_through_days
        else
            trainee = User.find(params[:traineeId] )
            
            @day_performances = trainee.day_performances_through_days
        end
    end

    def destroy
        @day_performance = DayPerformance.find(params[:id])
        @day_performance.destroy
        render json:@day_performance 

    end

    private 
    def day_performances_params 
        params.require(:day_performances).permit(:id, :performance_id, :day_id)
    end


end
