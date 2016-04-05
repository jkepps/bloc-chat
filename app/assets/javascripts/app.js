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
				}
			})
			.state('rooms', {
				url: '/chat-rooms/{id}',
				controller: 'RoomsCtrl as rooms',
				templateUrl: 'chat-rooms/_rooms.html',
				resolve: {
					room: ['$stateParams', 'Rooms', function($stateParams, rooms) {
						return rooms.get($stateParams.id);
					}]
				}
			});
			
		$urlRouterProvider.otherwise('/');
	}


	angular
		.module('blocChat', ['ui.router', 'templates', 'ngAnimate', 'ui.bootstrap', 'ngCookies'])
		.config(config);
})();