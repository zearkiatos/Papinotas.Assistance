class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.int :listId
      t.int :courseId
      t.int :studentId
      t.int :numberOfList
      t.references :course, null: false, foreign_key: true
      t.references :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end
