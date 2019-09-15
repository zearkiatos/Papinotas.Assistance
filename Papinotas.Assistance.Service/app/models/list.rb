class List < ApplicationRecord
  belongs_to :courses
  belongs_to :students

  has_many :assistances

  validates :last_name, presence: true
  validates :number_of_list, presence: true

end
