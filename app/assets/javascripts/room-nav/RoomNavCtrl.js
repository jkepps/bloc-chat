(function() {
	function RoomNavCtrl($scope, Rooms) {
		this.rooms = Rooms.rooms;
	}

	angular
		.module('blocChat')
		.controller('RoomNavCtrl', ['$scope', 'Rooms', RoomNavCtrl]);
})();