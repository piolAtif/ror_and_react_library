class BooksController < ApplicationController

  def index
    @books = Book.all
   
    if params[:search]
    	@books = Book.search(params[:search]).order("created_at DESC")
    else
    	@books = Book.joins(
            "LEFT JOIN `book_Borrower_Mappings` ON book_Borrower_Mappings.book_id = books.id").select(
            "books.*, book_Borrower_Mappings.can_borrowed").where(
            "book_Borrower_Mappings.id = 
            (SELECT MAX(id) FROM book_borrower_mappings WHERE book_id = books.id) AND
            can_borrowed is true OR can_borrowed is null")
    end

    books = @books.map do |b|
        if(b[:can_borrowed] != 0)
            b[:can_borrowed] = 1
        else 
            b[:can_borrowed] = 0
        end
        b.as_json(:except => [:created_at, :updated_at, :user_id, :borrow_id])
    end

    if(books.present?)
        render :json => {status: 'SUCCESS', message: '',data: books},status: :ok
    else
        render :json => {status: 'Error', message: '%s not found' %[params[:search]],data:books},status: :ok
    end
  end
end