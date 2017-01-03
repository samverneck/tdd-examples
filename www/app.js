(function () {
	'use strict';	
	angular.module('mk.controllers',[]);
	angular.module('mk.services',[]);
	angular.module('mk.directives',[]);

	angular.module('guiacc',[
		'ngRoute',
		'ui.bootstrap',
		'ngFileUpload',
		'mk.controllers',
		'mk.services',
		'mk.directives',
		'toaster'				
		])
	.config(function($routeProvider){
		$routeProvider.when("/",
			{
				templateUrl: "../templates/home/home.html",
				controller: "homeCtrl",
				controllerAs: "vm"
			}
		);
	})

})();