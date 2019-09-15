class Course < ApplicationRecord

    has_many :list

    self.primary_key = "course_id"
    
    validates :course_letter, presence: true
    
end
