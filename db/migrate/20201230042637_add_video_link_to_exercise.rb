class AddVideoLinkToExercise < ActiveRecord::Migration[5.2]
  def change
    add_column :exercises, :video_link, :string

  end
end
