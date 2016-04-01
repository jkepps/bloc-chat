(function() {
	function NewRoomModalCtrl($scope, $uibModal, Rooms) {

		$scope.animationsEnabled = true;

		this.open = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'room-nav/_new_room_modal.html',
				controller: 'NewRoomModalInstanceCtrl as modalInst',
				size: size,
				resolve: {
					newRoom: function() {
						return $scope.newRoom;
					}
				}
			});

			modalInstance.result.then(function(newRoom) {
				Rooms.create(newRoom);
			});
		};
	}

	function NewRoomModalInstanceCtrl($scope, $uibModalInstance) {
		this.ok = function() {
			if(!$scope.name || $scope.name === '') { return; }
			$uibModalInstance.close({name: $scope.name, user: $scope.user});
		};

		this.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	}

	angular
		.module('blocChat')
		.controller('NewRoomModalCtrl', ['$scope', '$uibModal', 'Rooms', NewRoomModalCtrl])
		.controller('NewRoomModalInstanceCtrl', ['$scope', '$uibModalInstance', NewRoomModalInstanceCtrl])

})();