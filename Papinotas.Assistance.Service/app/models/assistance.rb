class Assistance < ApplicationRecord
  belongs_to :lists

  validates :list_id, presence: true
  validates :created_date, presence: true
  validates :modified_date, presence: true
  validates :assist, presence: true
end
