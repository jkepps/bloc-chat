class ChatRoom < ActiveRecord::Base

	validates :name,
						length: { minimum: 3, maximum: 200},
						presence: true,
						uniqueness: {case_sensitive: false}
end
