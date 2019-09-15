class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.integer :list_id
      t.integer :course_id
      t.integer :student_id
      t.integer :number_of_list
      t.references :courses, foreign_key: true
      t.references :students, foreign_key: true

      t.timestamps
    end
  end
end
