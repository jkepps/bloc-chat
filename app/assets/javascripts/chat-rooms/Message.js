(function() {
	function Message($http) {
		var Message = {};

		Message.send = function(chatRoomId, newMessage) {
			return $http.post('/chat_rooms/' + chatRoomId + '/messages.json', newMessage).then(function(res) {
				return res.data;
			});
		};

		return Message;
	}

	angular
		.module('blocChat')
		.factory('Message', ['$http', Message])
})();