class CreateBookBorrowerMappings < ActiveRecord::Migration[5.1]
  def change
    create_table :book_borrower_mappings do |t|
      t.integer :book_id
      t.integer :user_id
      t.date :borrowed_date
      t.date :returned_date

      t.timestamps
    end
  end
end
