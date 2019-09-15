class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.integer :student_id
      t.string :name
      t.string :last_name
      t.string :rut

      t.timestamps
    end
  end
end
