class AddActiveToPerformances < ActiveRecord::Migration[5.2]
  def change
    add_column :performances, :active, :boolean, null: false, default: false
  end
end
