class User < ApplicationRecord
	has_many :bookBorrowerMappings
	has_many :books,through: :bookBorrowerMappings
	validates :name,
			:presence => true
end