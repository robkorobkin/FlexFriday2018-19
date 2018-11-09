

var availableBooks = [
	{
		"bookId" 	: 123,
		"title" 	: "The Cat in the Hat",
		"author" 	: "Dr. Seuss",
		"description" :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem " + 
						"Ipsum has been the industry's standard dummy text ever since the 1500s, when an " +
						"unknown printer took a galley of type and scrambled it to make a type specimen book.",
		"copies" 	: 10,
		"permalink" : "fpl.com/book/123",
		"commentsUrl" : "...",

	},

	{
		"bookId" 	: 125,
		"title" 	: "Alice in Wonderland",
		"author" 	: "Lewis Caroll",
		"description" :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem " + 
						"Ipsum has been the industry's standard dummy text ever since the 1500s, when an " +
						"unknown printer took a galley of type and scrambled it to make a type specimen book.",
		"copies" 	: 30,
		"permalink" : "fpl.com/book/123",
		"commentsUrl" : "...",

	}

];




var app = angular.module('dflApp', []);

app.controller('dflCtrl', ['$scope',
	function($scope){

		$scope.books = availableBooks;

		$scope.view = 'list';


		$scope.toggleView = function(viewName){
			
			if(viewName == 'add') $scope.newBook = {};

			$scope.view = viewName;

		}

		$scope.addBook = function(){
			$scope.books.unshift($scope.newBook);
			$scope.toggleView('list');
		}

		$scope.checkStatus = function(){
			console.log($scope.newBook);
		}



	}
]);

