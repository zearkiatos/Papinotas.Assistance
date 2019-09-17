class List < ApplicationRecord
  belongs_to :courses
  belongs_to :students

  has_many :assistances

  validates :course_id, presence: true
  validates :student_id, presence: true
  validates :number_of_list, presence: true

end
