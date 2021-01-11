class CreateDayExercise < ActiveRecord::Migration[5.2]
  def change
    create_table :day_exercises do |t|
      t.integer :exercise_id, null: false
      t.integer :day_id, null: false
    end
    add_index(:day_exercises, :day_id)
    add_index(:day_exercises, :exercise_id)


  end
end
