# == Schema Information
#
# Table name: days
#
#  id      :bigint           not null, primary key
#  name    :string
#  user_id :integer          not null
#  active  :boolean
#
class Day < ApplicationRecord
    belongs_to :user, 
        foreign_key: :user_id, 
        class_name: :User

    has_many :day_exercises, 
        foreign_key: :day_id,
        class_name: :DayExercise

    has_many :exercises, 
        through: :day_exercises


    has_many :day_performances, 
        foreign_key: :day_id, 
        class_name: :DayPerformance
end
