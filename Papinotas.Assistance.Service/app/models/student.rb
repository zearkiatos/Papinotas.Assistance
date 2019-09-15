class Student < ApplicationRecord

    has_many :list

    self.primary_key = "student_id"
  
    validates :name, presence: true
    validates :student_id, presence: true
    validates :rut, presence: true

end