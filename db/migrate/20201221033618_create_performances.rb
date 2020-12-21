class CreatePerformances < ActiveRecord::Migration[5.2]
  def change
    create_table :performances do |t|
      t.integer :duration
      t.integer :weight 

      t.integer :user_id, null: false
      t.integer :exercise_id, null: false
      
      t.timestamps
    end
    add_index(:performances, :user_id)
    add_index(:performances, :exercise_id)
  end
end
