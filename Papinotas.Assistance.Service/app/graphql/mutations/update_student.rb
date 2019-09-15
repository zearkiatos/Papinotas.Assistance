module Mutations
  class UpdateStudent < GraphQL::Schema::RelayClassicMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end
    field :student, Types::StudentType, null: false

    argument :id, ID, required: true
    argument :student_id, Integer, required: true
    argument :name, String, required: true
    argument :last_name, String, required: true
    argument :rut, String, required: true

    def resolve(id:,student_id:, name:, last_name:, rut:)
      student = Student.find(id)
      student.update!(student_id:student_id, name:name, last_name:last_name, rut:rut)      
      {
        student: student
      }     

    end
  end
end
