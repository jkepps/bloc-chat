(function() {
	function BlocChatCookies($cookies, $uibModal) {
		if(!$cookies.get('blocChatCurrentUser') || $cookies.get('blocChatCurrentUser') === '') {
			$uibModal.open({
				animation: false,
				templateUrl: 'home/_set_username_modal.html',
				controller: 'SetUsernameModalInstanceCtrl as usernameModalInst',
				size: 'sm',
				backdrop: 'static'
			}).result.then(function(res) {
				$cookies.put('blocChatCurrentUser', res.username);
			});
		}
	}

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();