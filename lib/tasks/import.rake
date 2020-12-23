require 'roo'

namespace :import do
  desc "Import data from spreadsheet"
  task data: :environment do
    puts 'Importing Data'

    data = Roo::Spreadsheet.open('lib/test.csv')
    headers = data.row(1) #get header row
    data.each_with_index do |row, idx|
      next if idx == 0 # skip header
      # create hash from headers and cells
      exercise_data = Hash[[headers, row].transpose]
      if Exercise.exists?(name: exercise_data['name'])
        puts "Exercise with name '#{exercise_data['name']}' already exists"
        next 
      end
      exercise = Exercise.new(exercise_data)
      puts "saving '#{exercise.name}' with user_id #{exercise.user_id}"
      exercise.save!
    end
  end

end
