class UsersController < ApplicationController
	def index
    users = User.order('created_at DESC');
    render json: {status: 'SUCCESS', message: '',data: users},status: :ok
  end

  def show
    if(User.exists?(id: params[:id]))
      user = User.find(params[:id]).books.select("books.*,book_Borrower_Mappings.can_borrowed").where(
        "can_borrowed is false")
      if(user.present?)
        user_books = user.map do |b|
          b[:can_borrowed] = 0
          b.as_json(:except => [:created_at, :updated_at, :user_id])
        end
        render json: {status: 'SUCCESS', message: '',data: user_books},status: :ok  	
      else	
        render json: {status: 'Error', message: 'User has no pending books',data:user_books},status: :ok   
      end
    else
      render json: {status: 'Error', message: 'User not found'},status: :ok  
    end 
  end
end 