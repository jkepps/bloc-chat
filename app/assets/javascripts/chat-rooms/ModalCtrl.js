(function() {
	function ModalCtrl($scope, $uibModal, Rooms) {

		$scope.animationsEnabled = true;

		this.open = function(size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'chat-rooms/_modal.html',
				controller: 'ModalInstanceCtrl as modalInst',
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

	function ModalInstanceCtrl($scope, $uibModalInstance) {
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
		.controller('ModalCtrl', ['$scope', '$uibModal', 'Rooms', ModalCtrl])
		.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', ModalInstanceCtrl])

})();