class Course < ApplicationRecord

    has_many :lists
    
    validates :course_letter, presence: true

end
