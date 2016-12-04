(function(){
	'use strict';

	angular.module('myfirstapp',[])
	.controller('myfirstcontroller', function($scope){
		$scope.name = "maor";
		$scope.myfunction = function(){
			return "jdfsgjfdg";
		}
	});


	})();