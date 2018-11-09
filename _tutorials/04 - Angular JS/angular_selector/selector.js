


var app = angular.module('selectorApp', []);

app.controller('selectorCtrl', ['$scope', 
	function($scope){


		// SET OF PEOPLE
		$scope.people = [
			{
				id		: 1,
				pic 	: "dawson.jpg",
				name 	: "Dawson Spencer",
				email 	: "dawson@b.com"
			},
			{
				id 		: 2,
				pic 	: "rob.jpg",
				name 	: "Rob Korobkin",
				email 	: "rob@b.com"
			},
			{
				id		: 3,
				pic 	: "simon.jpg",
				name 	: "Simon Hergenhan",
				email 	: "simon@b.com"
			},
			{
				id		: 4,
				pic 	: "gilman.jpg",
				name 	: "Adam Gilman",
				email 	: "gilman@b.com"
			}
		];

		$scope.selected_person = false;


		$scope.selectPerson = function(){
			var index = $scope.selectedId;
			$scope.selected_person = $scope.people[index];
		}



}]);


