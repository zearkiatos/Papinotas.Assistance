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

  end

end