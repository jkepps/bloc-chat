FactoryGirl.define do
  factory :message do
    body Faker::Hipster.sentence(8)
    author Faker::Internet.user_name
    chat_room
  end
end
