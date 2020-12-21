class Performance < ApplicationRecord
    belongs_to :user, 
        foreign_key: :user_id, 
        class_name: :User 

    belongs_to :exercise, 
        foreign_key: :exercise_id, 
        class_name: :Exercise
end