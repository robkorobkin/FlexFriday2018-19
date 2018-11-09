


var app = angular.module('gameApp', []);

app.controller('gameCtrl', ['$scope', '$rootScope', '$interval',
	function($scope, $rootScope, $interval){


		$scope.board = {
			w : 600,
			h : 400,
			increment : 4
		}

		$scope.balls = [
			{
				h : 50,
				w : 50,
				x : 0,
				y : 0,
				xInc : 4,
				yInc : 4,
				background: "red"
			},
			{
				h : 20,
				w : 20,
				x : 400,
				y : 90,
				xInc : -8,
				yInc : -8,
				background: "green"
			}
		];



		$scope.addBall = function(){
			$scope.balls.push({
				h : parseInt($scope.newBall.size),
				w : parseInt($scope.newBall.size),
				x : 10,
				y : 10,
				xInc : parseInt($scope.newBall.speed),
				yInc : parseInt($scope.newBall.speed),
				background: $scope.newBall.color
			});
		}



		var stop = $interval(function() {

			$.each($scope.balls, function(bIndex, ball){

				ball.x += ball.xInc;
				ball.y += ball.yInc;

				// bottom or top
				if($scope.board.h - ball.y - ball.h < 0 || ball.y  < 0){
					ball.yInc *= -1;
					ball.y += ball.yInc;
				}

				// left or right
				if(ball.x  < 0 || $scope.board.w - ball.x - ball.w < 0){
					ball.xInc *= -1;
					ball.x += ball.xInc;
				}

			});


		}, 50);



	}
]);




// $(document).on('keypress', function(e){
         
// 	console.log(e.key + ' - ' + e.keyCode);


// 	switch(e.keyCode){

// 		// down
// 		case 40 :
// 			if($scope.board.h - $scope.player.y - $scope.player.h > 0){
// 				$scope.player.y += $scope.board.increment;
// 			}
// 		break;


// 		// up
// 		case 38 :
// 			if($scope.player.y  > 0){
// 				$scope.player.y -= $scope.board.increment;
// 			}
// 		break;


// 		// left
// 		case 37 :
// 			if($scope.player.x  > 0){
// 				$scope.player.x -= $scope.board.increment;
// 			}
// 		break;


// 		// right
// 		case 39 :
// 			if($scope.board.w - $scope.player.x - $scope.player.w > 0){
// 				$scope.player.x += $scope.board.increment;
// 			}
// 		break;



// 	}

//  	$scope.$apply();
// });