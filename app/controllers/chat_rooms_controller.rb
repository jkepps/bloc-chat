class ChatRoomsController < ApplicationController
	def index
		rooms = ChatRoom.all
		render json: rooms, status: 200
	end

	def show
		room = ChatRoom.find(params[:id])
		render json: room
	end

	def create
		room = ChatRoom.create(chat_room_params)

		if room.valid?
			room.save
			render json: {chat_room: room, messages: room.messages}, status: 201
		else
			render json: {error: "Chat Room is invalid.", status: 400}, status: 400
		end
	end

	private
	def chat_room_params
		params.require(:chat_room).permit(:name, :created_by)
	end
end
