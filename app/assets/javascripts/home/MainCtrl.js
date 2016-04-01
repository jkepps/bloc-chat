(function() {
	function MainCtrl($scope, Rooms) {
		this.rooms = Rooms.rooms;
		this.selectedRoom = this.rooms[0];
		this.selectedRoom.isActive = true;

		this.selectRoom = function(room) {
			this.selectedRoom.isActive = false;
			this.selectedRoom = room;
			this.selectedRoom.isActive = true;
		};

		this.addRoom = function() {
			if(!$scope.name || $scope.name === '') { return; }
			Rooms.create({
				name: $scope.name,
				created_by: $scope.user
			});
			$scope.name='';
			$scope.user='';
		};
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', 'Rooms', MainCtrl])
})();