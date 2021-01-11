# == Schema Information
#
# Table name: exercises
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  video_link  :string
#
class Exercise < ApplicationRecord
    belongs_to :user, 
        foreign_key: :user_id, 
        class_name: :User

    has_many :performances, 
        foreign_key: :exercise_id, 
        class_name: :Performance

    has_many :day_exercises, 
        foreign_key: :exercise_id,
        class_name: :DayExercise

    has_many :days, 
        through: :day_exercises
end
