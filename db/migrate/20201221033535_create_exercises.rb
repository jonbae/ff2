class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name, null: false
      t.text :description


      t.integer :user_id, null: false
      
      t.timestamps
    end
    add_index(:exercises, :user_id)
  end
end
