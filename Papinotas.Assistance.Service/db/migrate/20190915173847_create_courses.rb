class CreateCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :courses do |t|
      t.integer :course_id
      t.string :course_letter

      t.timestamps
    end
  end
end
