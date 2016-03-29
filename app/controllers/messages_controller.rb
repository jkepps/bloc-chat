class MessagesController < ApplicationController
	def create
		room = ChatRoom.find(params[:chat_room_id])
		message = room.messages.create(message_params)

		if message.valid?
			message.save
			render json: message, status: 201
		else
			render json: {error: "Message is invalid.", status: 400}, status: 400
		end
	end

	private
	def message_params
		params.require(:message).permit(:body, :author)
	end
end
