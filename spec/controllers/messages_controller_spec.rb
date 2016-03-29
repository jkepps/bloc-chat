require 'rails_helper'

RSpec.describe MessagesController, type: :controller do
	let(:my_room) { create(:chat_room) }
	let(:my_message) { create(:message) }

	describe "POST create" do
		before { post :create, chat_room_id: my_room.id, message: {body: "New message body", author: "jepps"} }

		it 'returns http success' do
			expect(response).to have_http_status(:success)
		end

		it 'returns json content type' do
			expect(response.content_type).to eq 'application/json'
		end
	end
end
