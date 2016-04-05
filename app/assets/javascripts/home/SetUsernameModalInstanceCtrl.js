(function() {
	function SetUsernameModalInstanceCtrl($scope, $uibModalInstance) {
		this.ok = function() {
			if(!$scope.username || $scope.username === '') { return; }
			$uibModalInstance.close({username: $scope.username});
		};
	}

	angular
		.module('blocChat')
		.controller('SetUsernameModalInstanceCtrl', ['$scope', '$uibModalInstance', SetUsernameModalInstanceCtrl]);
})();