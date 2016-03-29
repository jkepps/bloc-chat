#Create Chat Rooms
8.times do
	chat_room = ChatRoom.create!(
		name: Faker::Hipster.sentence(5),
		created_by: Faker::Internet.user_name
	)
end

chat_rooms = ChatRoom.all

puts "Seed finished"
puts "#{ChatRoom.count} chat rooms created"