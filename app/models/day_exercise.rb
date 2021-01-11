# == Schema Information
#
# Table name: day_exercises
#
#  id          :bigint           not null, primary key
#  exercise_id :integer          not null
#  day_id      :integer          not null
#
class DayExercise < ApplicationRecord
    belongs_to :exercise, 
        foreign_key: :exercise_id, 
        class_name: :Exercise

    belongs_to :day, 
        foreign_key: :day_id, 
        class_name: :Day

    
end
