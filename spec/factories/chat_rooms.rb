FactoryGirl.define do
  factory :chat_room do
    name Faker::Hipster.sentence(10)
		created_by Faker::Internet.user_name
  end

end
