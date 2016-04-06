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
			
		$urlRouterProvider
			.when('/?goto=chat-rooms%2F2', ['$stateParams', function($stateParams, $location) {
				$location.path('/chat-rooms/' + $stateParams.id);
				$location.go('/chat-rooms/' + $stateParams.id)
				return '/chat-rooms/' + $stateParams.id;
			}])
			.rule(function($injector, $location) {
				var path = $location.path();
				console.log(path);
				if(path === '/?goto=chat-rooms%2F2') {
					return '/chat-rooms/2';
				}
			});
	}


	angular
		.module('blocChat', ['ui.router', 'templates', 'ngAnimate', 'ui.bootstrap', 'ngCookies'])
		.config(config);
})();