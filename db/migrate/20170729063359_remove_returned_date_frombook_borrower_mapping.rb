class RemoveReturnedDateFrombookBorrowerMapping < ActiveRecord::Migration[5.1]
  def change
  	remove_column :book_borrower_mappings, :returned_date
  	remove_column :book_borrower_mappings, :borrowed_date
  end
end
