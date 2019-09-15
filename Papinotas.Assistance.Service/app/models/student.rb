class Student < ApplicationRecord

    has_many :lists
  
    validates :name, presence: true
    validates :student_id, presence: true
    validates :rut, presence: true

end
