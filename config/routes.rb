Rails.application.routes.draw do
  resources :books
  get '/all/books', to: 'books#index'
  get '/search', to: 'books#search'
  get 'user/:user_id/book/:book_id/borrow' => 'borrows#borrow'
  get 'user/:user_id/book/:book_id/return' => 'borrows#return'
  resources :users
end
