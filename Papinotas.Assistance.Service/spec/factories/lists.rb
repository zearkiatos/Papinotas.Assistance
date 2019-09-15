FactoryBot.define do
  factory :list do
    list_id { 1 }
    course_id { 1 }
    student_id { 1 }
    number_of_list { 1 }
    courses { nil }
    students { nil }
  end
end
