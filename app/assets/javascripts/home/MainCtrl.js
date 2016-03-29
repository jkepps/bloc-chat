(function() {
	function MainCtrl($scope) {
		this.test = 'blah blah blah';
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$scope', MainCtrl])
})();