class RemoveFrombookBorrowerMappings < ActiveRecord::Migration[5.1]
  def change
  	remove_column :book_borrower_mappings, :isreturned
  	remove_column :book_borrower_mappings, :isborrowed
  end
end
