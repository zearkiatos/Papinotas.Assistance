class CreateAssistances < ActiveRecord::Migration[6.0]
  def change
    create_table :assistances do |t|
      t.integer :assistance_id
      t.integer :list_id
      t.datetime :created_date
      t.datetime :modified_date
      t.references :lists, foreign_key: true

      t.timestamps
    end
  end
end
