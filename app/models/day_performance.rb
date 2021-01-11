# == Schema Information
#
# Table name: day_performances
#
#  id             :bigint           not null, primary key
#  performance_id :integer          not null
#  day_id         :integer          not null
#
class DayPerformance < ApplicationRecord
    belongs_to :performance, 
        foreign_key: :performance_id, 
        class_name: :Performance

    belongs_to :day, 
        foreign_key: :day_id, 
        class_name: :Day

    
end
