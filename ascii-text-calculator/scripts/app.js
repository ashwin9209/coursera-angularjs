(function () {
'use strict';

angular.module('asciiNameCalculator', [])

.controller('asciiController', function ($scope) {

	$scope.name = "";
	$scope.totalValue = 0;

	$scope.displayNumeric = function () {

		var totalNameValue = calculateNumericValue($scope.name);
		$scope.totalValue = totalNameValue;

	};

function calculateNumericValue(inputString) {

	var totalStringValue = 0;

	for (var i = 0; i < inputString.length; i++) {
		totalStringValue += inputString.charCodeAt(i);
	}

	return totalStringValue;

};

});


})();