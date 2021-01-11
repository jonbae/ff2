class CreateDayPerformance < ActiveRecord::Migration[5.2]
  def change
    create_table :day_performances do |t|
      t.integer :performance_id, null: false
      t.integer :day_id, null: false
    end
    add_index(:day_performances, :day_id)
    add_index(:day_performances, :performance_id)
  
  end
end
