# == Schema Information
#
# Table name: benches
#
#  id          :bigint           not null, primary key
#  description :string
#  lat         :float
#  lng         :float
#  seating     :integer          default(2), not null
#  picture_url :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class BenchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
