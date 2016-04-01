(function() {
	function MainCtrl($scope, Rooms) {
		this.rooms = Rooms.rooms;
		// this.room = room;

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