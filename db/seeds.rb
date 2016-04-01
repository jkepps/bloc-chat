# Create Chat Rooms
8.times do
	chat_room = ChatRoom.create!(
		name: Faker::Team.name,
		created_by: Faker::Internet.user_name
	)
end

chat_rooms = ChatRoom.all

# Create Messages
50.times do
	message = Message.create!(
		body: Faker::Hipster.sentence,
		author: Faker::Internet.user_name,
		chat_room: chat_rooms.sample
	);
end

messages = Message.all

puts "Seed finished"
puts "#{ChatRoom.count} chat rooms created"
puts "#{Message.count} messages created"