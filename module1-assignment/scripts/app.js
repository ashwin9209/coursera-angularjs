(function () {
'use strict';

	angular.module('Module1Assignment', [])
	.controller('DietController', DietController);

	DietController.$inject = ['$scope'];
	function DietController($scope) {
		$scope.dietFeedback = "Let's check your diet!";
		$scope.foodItems = "";
		$scope.textColor = "blue";

		$scope.checkDiet = function() {
			
			if($scope.foodItems.length === 0) {
				$scope.textColor = "red";
				$scope.dietFeedback = "Please enter the data first in the input box";
			}

			else if($scope.foodItems.length > 0) {
				var foodItemsArray = $scope.foodItems.split(',');
				var dietCount = foodItemsArray.length;
				$scope.textColor = "#00a758";
				if (dietCount <= 3) {
					$scope.dietFeedback = "Enjoy the meal! Don't forget to have a pizza occasionally!"
				}

				else {
					$scope.dietFeedback = "That's too much! Slow down there, cowboy!"
				}
			}
		}

		$scope.initDiet = function () {
			$scope.textColor = "blue";
			$scope.dietFeedback  = "Waiting for your meals ...";
		}
		


	}

})();