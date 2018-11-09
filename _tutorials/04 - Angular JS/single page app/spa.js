


var app = angular.module('spApp', []);

app.controller('spCtrl', ['$scope',
	function($scope){


		$scope.view = 'fruit';


		$scope.toggleView = function(viewName){

			$scope.view = viewName;

		}


	}
]);

