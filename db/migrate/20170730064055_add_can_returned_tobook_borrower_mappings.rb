class AddCanReturnedTobookBorrowerMappings < ActiveRecord::Migration[5.1]
  def change
  	 add_column :book_borrower_mappings, :can_borrowed, :string
  end
end
