FactoryBot.define do
  factory :list do
    listId { "" }
    courseId { "" }
    studentId { "" }
    numberOfList { "" }
    course { nil }
    student { nil }
  end
end
