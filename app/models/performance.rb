# == Schema Information
#
# Table name: performances
#
#  id          :bigint           not null, primary key
#  duration    :integer
#  weight      :integer
#  rest_time   :integer
#  repetitions :integer
#  sets        :integer
#  exercise_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Performance < ApplicationRecord

    has_one :user, 
    through: :exercise, 
    

    belongs_to :exercise, 
        foreign_key: :exercise_id, 
        class_name: :Exercise


end
