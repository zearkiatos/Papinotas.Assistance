class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.int :studentId
      t.string :name
      t.string :lastName
      t.string :rut

      t.timestamps
    end
  end
end
