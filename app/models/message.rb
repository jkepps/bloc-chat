class Message < ActiveRecord::Base
  belongs_to :chat_room

  validates :body, length: {minimum: 1}, presence: true
end
