FactoryBot.define do
  factory :list do
    list_id { "" }
    course_id { "" }
    student_id { "" }
    number_of_list { "" }
    course { nil }
    student { nil }
  end
end
