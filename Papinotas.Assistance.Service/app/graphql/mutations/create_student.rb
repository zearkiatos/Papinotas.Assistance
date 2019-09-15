module Mutations
  class CreateStudent < GraphQL::Schema::RelayClassicMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end
    field :student, Types::StudentType, null: false

    argument :name, String, required: true
    argument :last_name, String, required: true
    argument :rut, String, required: true

    def resolve(name:, last_name:, rut:)
      studentLast = Student.last
      student_id = studentLast.student_id + 1
      student = Student.create!(student_id: student_id,name: name, last_name: last_name, rut: rut)      
      {
        student: student
      }    
    end

  end
end
