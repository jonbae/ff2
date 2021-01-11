class CreateDay < ActiveRecord::Migration[5.2]
  def change
    create_table :days do |t|
      t.string :name
      t.integer :user_id, null: false
      t.boolean :active
    end
    add_index(:days, :user_id)

  end
end
