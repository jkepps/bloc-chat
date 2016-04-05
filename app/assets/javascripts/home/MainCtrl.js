(function() {
	function MainCtrl($cookies) {
		this.username = $cookies.get('blocChatCurrentUser');
	}

	angular
		.module('blocChat')
		.controller('MainCtrl', ['$cookies', MainCtrl])
})();