(function() {
	function RoomsCtrl($scope, $location, $cookies, room, Message, $timeout) {
		$timeout(function () {
				var scroller = document.getElementById("autoscroll");
				scroller.scrollTop = scroller.scrollHeight;
			}, 0, false);
		
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
			newMessage.created_at = new Date();
			this.room.messages.push(newMessage);
			$scope.body='';
			$timeout(function () {
				var scroller = document.getElementById("autoscroll");
				scroller.scrollTop = scroller.scrollHeight;
			}, 0, false);
		};

		this.close = function() {
			$location.path('/');
		};
	}

	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['$scope', '$location', '$cookies', 'room', 'Message', '$timeout', RoomsCtrl]);
})();