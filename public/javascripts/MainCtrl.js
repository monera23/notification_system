angular.module('notificationApp',['ngRoute'])
	.controller('MainCtrl',["$http","$scope","$location","$interval",function($http,$scope,$location,$interval){
		$scope.x={};
		$scope.arr = [];
		$scope.$on('$viewContentLoaded', function(){
    		$('.dropdown-button').dropdown({
		      inDuration: 300,
		      outDuration: 225,
		      hover: true, // Activate on hover
		      belowOrigin: true, // Displays dropdown below the button
		      alignment: 'right' // Displays dropdown with edge aligned to the left of button
		    });

		    $http.post('/noti',$scope.x)
		    .success(function(data){
		    	console.log(data);
		    })
		    .error(function(err){
		    	console.log(err);
		    })
	  	});

	  	$scope.read = false;


		$scope.fetch=function(){
			$scope.read = false;
			$http.get('/noti')
			.success(function(data){
				if( $scope.read) $scope.arr = data;
				else{
					for(var i = 0; i < data.length; i++)
					$scope.arr.push(data[i]);
				}
				// console.log(data);
				// console.log($scope.arr);
			})
			.error(function(err){
				console.log(err);
			})
		};

		// $scope.generate=function(){

		// 	$http.post('/noti',$scope.x).
		// 	success(function(data){
		// 		console.log(data);
		// 	})
		// 	.error(function(err){
		// 		console.log(err);
		// 	});
		// };

		$scope.call = function(){	
			console.log("adada");	
		};

		$scope.markread = function(){
			$scope.count = 0;
			$scope.read = true;
			$http.post('/noti/update',{"notification":$scope.arr}).
			success(function(data){
				$scope.arr = [];
				console.log(data);
			})
			.error(function(err){
				console.log(err);
			});
		};

		//$interval($scope.generate,10000);
		$interval($scope.fetch,(Math.floor(Math.random() * 10))*1000 +4000);
		
		

	}]);