


var app = angular.module('peopleApiApp', []);

app.controller('peopleApiCtrl', ['$scope', '$http',
	function($scope, $http){



		// INITIATLIZE VARIABLES ON LOAD

		$scope.init = function(){


			// STARTING SET OF PEOPLE
			$scope.currentPeople = [
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
				}
			];

			// HASH OF ASSIGNED IDs
			$scope.assignedIds = {};

			// TOTAL SET OF LOADED PEOPLE
			$scope.totalSet =[];

			// ADD STARTING SET TO TOTAL SET
			$scope.addToList();
		}


		// MAKE API CALL AND LOAD RETURNED JSON
		$scope.fetchData = function(set){
			$http.post('api/' + set + '.js').then(function(response){
				$scope.currentPeople = response.data;
			});		
		}


		// UPDATE TOTAL SET WITH CURRENT SET
		$scope.addToList = function(){

			// FOR EACH PERSON IN THE CURRENT
			$.each($scope.currentPeople, function(index, person){

				// IF THE PERSON IS NOT ALREADY IN THE HASH
				if(!(person.id in $scope.assignedIds)){

					// ADD IT TO THE HASH
					$scope.assignedIds[person.id] = true;

					// ADD IT TO THE TOTAL SET
					$scope.totalSet.push(person);
				}
			})

			// DISPLAY TOTAL SET
			$scope.currentPeople = $scope.totalSet;
		}

		$scope.init();

}]);


