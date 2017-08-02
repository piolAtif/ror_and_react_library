class BorrowsController < ApplicationController
  def borrow
    bookRecord = BookBorrowerMapping.new(book_record_params)
    bookRecord[:can_borrowed] = false
    bookRecord.user_id = params[:user_id]
    bookRecord.book_id = params[:book_id]
    
    bookBorrowerMapping = BookBorrowerMapping.where(
      "user_id = ? AND book_id =? AND can_borrowed is false",params[:user_id],params[:book_id]).select(:id).last

    if(!bookBorrowerMapping.present?)
      if bookRecord.save
        bookRecord.id = params[:book_id]
      	render json: {status: 'SUCCESS', message:'Book Saved Successfully',data: bookRecord.as_json(
            :except => [:created_at, :updated_at, :book_id])},status: :ok
      else
        render json: {status: 'ERROR', message: 'Action Not saved',data: bookRecord.errors},status: :unprocessable_entity
    	end
    else
      render json: {status: 'ERROR', message: 'Book already borrowed'},status: :unprocessable_entity
    end
  end
   
  def return
    bookBorrowerMapping = BookBorrowerMapping.where("user_id = ? AND book_id =? AND can_borrowed is false",
    	params[:user_id],params[:book_id]).select(:id).last
  
    if(bookBorrowerMapping.present?)
      bookRecord = BookBorrowerMapping.find(bookBorrowerMapping[:id])
      bookRecord.can_borrowed = true
      if bookRecord.update_attributes(book_record_params)
        bookRecord.id = params[:book_id]
     
        render json: {status: 'SUCCESS', message:'',data: bookRecord.as_json(
          :except => [:created_at, :updated_at, :book_id])},status: :ok
      else
        render json: {status: 'ERROR', message: 'Action not saved',data: bookRecord.errors},status: :unprocessable_entity
      end
    else
      	render json: {status: 'ERROR', message: 'Book cannot be returned'},status: :unprocessable_entity
        end
  	end

    private  
    def book_record_params
     	params.permit(:user_id, :book_id, :can_borrowed)     
    end
   
end