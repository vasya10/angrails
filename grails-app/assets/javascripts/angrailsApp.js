var angrailsApp = angular.module('angrailsApp', []);

angrailsApp.controller('MainCtrl',
	function ($scope) {
		//Set Hello Text!
		console.log('calling main ctrl');
		$scope.helloText = 'Hello Angrails Demo!';
	}
);

angrailsApp.controller('StarCatalogCtrl',
	function ($scope, $http) {

		$scope.getStarCatalog = function () {
			$http.get('/angrails/starCatalog').
				success(function (data) {
					console.log("success: " + data);
					$scope.starCatalog = data;
				}).error(function (data) {
					console.log("error: " + data);
					$scope.starCatalog = data;
				});
		};

		$scope.getStarCatalog();
	}
);