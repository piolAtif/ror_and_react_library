json.extract! book, :id, :name, :author_name, :created_at, :updated_at
json.url book_url(book, format: :json)
