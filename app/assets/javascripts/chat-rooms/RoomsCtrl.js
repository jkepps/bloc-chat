(function() {
	function RoomsCtrl($scope, $cookies, room, Message) {
		this.room = room;

		$scope.hasMessages = function() {
			return !(room.messages.length == 0);
		};

		this.sendMessage = function() {
			if($scope.body === '') { return; }
			var newMessage = {
				body: $scope.body,
				author: $cookies.get('blocChatCurrentUser')
			};
			Message.send(this.room.id, newMessage);
			this.room.messages.push(newMessage);
			$scope.body='';
		};
	}

	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['$scope', '$cookies', 'room', 'Message', RoomsCtrl]);
})();