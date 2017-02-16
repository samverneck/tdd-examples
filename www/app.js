(function () {
	'use strict';	
	angular.module('mk.controllers',[]);
	angular.module('mk.services',[]);
	angular.module('mk.directives',[]);

	angular.module('guiacc',[
		'ngRoute',
		'toaster',		
		'ngAnimate',
		'ui.bootstrap',
		'ngFileUpload',
		'mk.controllers',
		'mk.services',
		'mk.directives'
		])
	.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
		.when("/",{
				templateUrl: "../templates/home/home.html",
				controller: "homeCtrl",
				controllerAs: "vm"
			});
	}]);

})();