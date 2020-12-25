json.extract! user, :id, :username
json.traineeIds user.trainees.pluck(:id) unless user.trainees.empty? 
json.trainerId user.trainer.id if user.trainer
