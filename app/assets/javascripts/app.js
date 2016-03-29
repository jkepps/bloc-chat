(function() {
	function config($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
		});

		$stateProvider
			.state('home', {
				url: '/',
				controller: 'MainCtrl as main',
				templateUrl: 'home/_home.html',
				resolve: {
					roomPromise: ['Rooms', function(rooms) {
						return rooms.getAll();
					}]
					// room: ['$stateParams', 'Rooms', function($stateParams, room) {
					// 	return room.get($stateParams.id);
					// }]
				}
		});
			
		$urlRouterProvider.otherwise('/');
	}


	angular
		.module('blocChat', ['ui.router', 'templates'])
		.config(config);
})();