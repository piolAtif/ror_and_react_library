class Book < ApplicationRecord
	has_many :bookBorrowerMappings
	has_many :users,through: :bookBorrowerMappings
	validates :name,
            :presence => true
    validates :author_name,
            :presence => true
    validates :image_link,
            :presence => true

	def self.search(search)
  		where("name LIKE :query OR author_name LIKE :query", query: "%#{search}%").joins(
            "LEFT JOIN `book_Borrower_Mappings` ON book_Borrower_Mappings.book_id = books.id").select(
            "books.*, book_Borrower_Mappings.can_borrowed,book_Borrower_Mappings.id as borrow_id").where(
            "book_Borrower_Mappings.id = 
            (SELECT MAX(id) FROM book_borrower_mappings WHERE book_id = books.id) and
            can_borrowed is true OR can_borrowed is null")
	end
end
