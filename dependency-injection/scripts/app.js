(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController($scope, $filter) {
	$scope.name = 'LifeCycle';

	$scope.convertToUpperCase = function () {
		var upCase = $filter('uppercase');
		$scope.name = upCase($scope.name);
	};
}

}

)();