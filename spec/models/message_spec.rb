require 'rails_helper'

RSpec.describe Message, type: :model do
	let(:chat_room) { create(:chat_room) }
	let(:message) { create(:message, chat_room: chat_room) }

	it { should belong_to(:chat_room) }

	it { should validate_presence_of(:body) }
	it { should validate_length_of(:body).is_at_least(1) }

	describe "attributes" do
		it "should respond to body" do
			expect(message).to respond_to(:body)
		end

		it "should respond to author" do
			expect(message).to respond_to(:author)
		end
	end
end
