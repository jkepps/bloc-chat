require 'rails_helper'

RSpec.describe ChatRoomsController, type: :controller do
	let(:my_room) { create(:chat_room) }

	describe "GET index" do
		before { get :index }

		it 'returns http success' do
			expect(response).to have_http_status(:success)
		end

		it 'returns json content type' do
			expect(response.content_type).to eq 'application/json'
		end
	end

	describe "GET show" do
		before { get :show, id: my_room.id }

		it 'returns http success' do
			expect(response).to have_http_status(:success)
		end

		it 'returns json content type' do
			expect(response.content_type).to eq 'application/json'
		end
	end

	describe "POST create" do
		before { post :create, chat_room: {name: "New Chat Room", created_by: "jepps"} }

		it 'returns http success' do
			expect(response).to have_http_status(:success)
		end

		it 'returns json content type' do
			expect(response.content_type).to eq 'application/json'
		end
	end
end
