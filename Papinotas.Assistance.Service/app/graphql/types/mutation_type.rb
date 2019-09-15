module Types
  class MutationType < Types::BaseObject
    field :updateStudent, mutation: Mutations::UpdateStudent
    field :removeStudent, mutation: Mutations::RemoveStudent
    field :createStudent, mutation: Mutations::CreateStudent
    
  end
end
