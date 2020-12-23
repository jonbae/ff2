# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  bench_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Favorite < ApplicationRecord
  validates :user_id, uniqueness: { scope: :bench_id }

  belongs_to :bench
  belongs_to :user
end
