require 'rails_helper'

RSpec.describe ChatRoom, type: :model do
	let(:chat_room) { create(:chat_room) }

	it { should have_many(:messages)}

	# shoulda tests for name
	it { should validate_presence_of(:name) }
	it { should validate_uniqueness_of(:name) }
	it { should validate_length_of(:name).is_at_least(3).is_at_most(200) }

	describe "attributes" do
		it "should respond to name" do
				expect(chat_room).to respond_to(:name)
		end

		it "should respond to created_by" do
			expect(chat_room).to respond_to(:created_by)
		end
	end
end
