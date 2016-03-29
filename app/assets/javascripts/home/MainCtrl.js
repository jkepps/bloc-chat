(function() {
	function MainCtrl($scope, Rooms) {
		this.test = 'blah blah blah';
		this.rooms = Rooms.rooms;
		// this.room = room;
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Rooms', MainCtrl])
})();