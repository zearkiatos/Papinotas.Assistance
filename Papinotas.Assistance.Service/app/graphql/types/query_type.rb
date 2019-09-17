module Types
  class QueryType < Types::BaseObject

    field :students, [Types::StudentType], null: false do
      description 'Find all students'
    end

    field :student, StudentType, null: true do
      argument :student_id, Integer, required: true
    end


    def students
      Student.all
    end

    def student(student_id:)
      Student.find(student_id)
    end

    field :courses, [Types::CourseType], null: false do
      description 'Find all courses'
    end

    field :course, CourseType, null: true do
      argument :course_id, Integer, required: true
    end

    def course(course_id:)
      Course.find(course_id)
    end

    def courses
      Course.all
    end

    field :courseList, CourseType, null: true do
      argument :course_id, Integer, required: true
    end

    def courseList(course_id:)
      Course.where(course_id: course_id)
    end

  end

end