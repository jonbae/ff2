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
class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  has_many :reviews
  has_many :favorites
  has_many :favorite_users,
    through: :favorites,
    source: :user
    
# Active Storage Association
  has_one_attached :photo

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  def average_rating
    reviews.average(:rating)
  end
end
