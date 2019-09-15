# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Populate Student Data model.
Student.create(student_id: 1 ,name: 'studentname1', last_name: 'studentLastName1', rut:'111111112')
Student.create(student_id: 2 ,name: 'studentname2', last_name: 'studentLastName2', rut:'222222223')

#Populate Course Data model.
Course.create(course_id: 1 ,course_letter: '1A')
Course.create(course_id: 2 ,course_letter: '1B')

#Populate List Data model.
List.create(list_id: 1 ,course_id: 1, student_id: 1, number_of_list: 1)
List.create(list_id: 2 ,course_id: 1, student_id: 2, number_of_list: 2)