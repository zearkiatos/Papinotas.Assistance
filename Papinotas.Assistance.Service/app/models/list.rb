class List < ApplicationRecord

  belongs_to :course
  belongs_to :student

  has_many :assistance

  self.primary_key = "list_id"

  validates :last_name, presence: true
  validates :number_of_list, presence: true

end
