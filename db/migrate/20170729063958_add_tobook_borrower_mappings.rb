class AddTobookBorrowerMappings < ActiveRecord::Migration[5.1]
  def change
  	 add_column :book_borrower_mappings, :isborrowed, :string
  	 add_column :book_borrower_mappings, :isreturned, :string
  end
end
