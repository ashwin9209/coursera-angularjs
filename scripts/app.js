(function () {
'use strict';

	angular.module('firstAngularJsApp', [])
	.controller ('firstController', function ($scope) {
		$scope.name = "Lorem ipsum";
		$scope.sayHello = function () {
			return "Hello Guest";
		}



	});

})();