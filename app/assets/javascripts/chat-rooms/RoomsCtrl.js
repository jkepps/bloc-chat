(function() {
	function RoomsCtrl($scope, Rooms, room) {
		this.room = room;

		$scope.hasMessages = function() {
			return !(room.messages.length == 0);
		};

		console.log($scope.hasMessages());
	}

	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['$scope', 'Rooms', 'room', RoomsCtrl]);
})();