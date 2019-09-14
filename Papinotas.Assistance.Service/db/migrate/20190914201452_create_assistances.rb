class CreateAssistances < ActiveRecord::Migration[6.0]
  def change
    create_table :assistances do |t|
      t.int :assistanceId
      t.int :listId
      t.datetime :createdDate
      t.datetime :modifiedDate
      t.references :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
