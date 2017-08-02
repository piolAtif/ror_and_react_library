class AddImageLinkToBook < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :image_link, :string
  end
end
