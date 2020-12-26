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
#
class Exercise < ApplicationRecord
    belongs_to :user, 
        foreign_key: :user_id, 
        class_name: :User

    has_many :performances, 
        foreign_key: :exercise_id, 
        class_name: :Performance
end
