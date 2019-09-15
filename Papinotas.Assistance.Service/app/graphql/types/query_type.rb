module Types
  class QueryType < Types::BaseObject

    field :students, [Types::StudentType], null: false do
      description 'Find all students'
    end

    field :student, [Types::StudentType], null: false do
      argument :id, ID, required: true
    end

    def students
      Student.all
    end

    def student(id)
      Student.find(id)
    end

  end

end