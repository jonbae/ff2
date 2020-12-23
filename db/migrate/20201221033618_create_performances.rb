class CreatePerformances < ActiveRecord::Migration[5.2]
  def change
    create_table :performances do |t|
      t.integer :duration
      t.integer :weight 
      t.integer :rest_time
      t.integer :repetitions
      t.integer :sets 

      t.integer :exercise_id, null: false
      
      t.timestamps
    end
    add_index(:performances, :exercise_id)
  end
end
