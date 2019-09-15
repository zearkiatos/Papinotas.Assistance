# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_15_174016) do

  create_table "assistances", force: :cascade do |t|
    t.integer "assistance_id"
    t.integer "list_id"
    t.datetime "created_date"
    t.datetime "modified_date"
    t.integer "lists_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["lists_id"], name: "index_assistances_on_lists_id"
  end

  create_table "courses", force: :cascade do |t|
    t.integer "course_id"
    t.string "course_letter"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "lists", force: :cascade do |t|
    t.integer "list_id"
    t.integer "course_id"
    t.integer "student_id"
    t.integer "number_of_list"
    t.integer "courses_id", null: false
    t.integer "students_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["courses_id"], name: "index_lists_on_courses_id"
    t.index ["students_id"], name: "index_lists_on_students_id"
  end

  create_table "students", force: :cascade do |t|
    t.integer "student_id"
    t.string "name"
    t.string "last_name"
    t.string "rut"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "assistances", "lists", column: "lists_id"
  add_foreign_key "lists", "courses", column: "courses_id"
  add_foreign_key "lists", "students", column: "students_id"
end
