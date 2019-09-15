module Mutations
  class RemoveStudent < GraphQL::Schema::RelayClassicMutation

    field :student, Types::StudentType, null: false

    argument :student_id, Integer, required: true

    def resolve(student_id:)
      student = Student.find(student_id)
      student.destroy!      
      { student: student }
    end

  end
end
