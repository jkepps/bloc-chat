class ChatRoom < ActiveRecord::Base
	has_many :messages

	validates :name,
						length: { minimum: 3, maximum: 200},
						presence: true,
						uniqueness: {case_sensitive: false}

	def as_json(options={})
		super(options.merge(include: :messages))
	end
end
