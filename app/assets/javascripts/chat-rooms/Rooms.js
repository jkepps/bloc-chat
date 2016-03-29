(function() {
	function Rooms($http) {
		var Rooms = {};

		Rooms.rooms = [];

		Rooms.getAll = function() {
			return $http.get('/chat_rooms.json').success(function(data) {
				angular.copy(data, Rooms.rooms);
			});
		};

		// Rooms.get = function(id) {
		// 	return $http.get('/chat_rooms/' + id + '.json').then(function(res) {
		// 		return res.data;
		// 	});
		// };

		return Rooms;
	}

	angular
		.module('blocChat')
		.factory('Rooms', ['$http', Rooms]);
})();