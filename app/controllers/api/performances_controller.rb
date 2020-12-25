class Api::PerformancesController < ApplicationController

    before_action :require_logged_in

    def create
        debugger
        @performance = Performance.new(performance_params)

    end

    def show
        debugger
    end


    def destroy
        @performance = Performance.find(params[:id])
        @performance.destroy
        render json:@performance
    end



    private 
    def performance_params
        params.require(:performance).permit(:id, :exercise_id, :user_id, :duration, :weight, :rest_time, :repetitions, :sets)
    end

end
