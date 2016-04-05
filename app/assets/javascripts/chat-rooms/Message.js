(function() {
	function Message($http) {
		var Message = {};

		Message.send = function(chat_room_id, newMessage) {
			return $http.post('/chat_rooms/' + chat_room_id + '/messages.json', newMessage).then(function(res) {
				return res.data;
			});
		};

		return Message;
	}

	angular
		.module('blocChat')
		.factory('Message', ['$http', Message])
})();