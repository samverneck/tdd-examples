(function () {
	'use strict';
	angular
		.module('mk.directives')
		.directive('navbarHome', 
			function () {
				return{
					templateUrl: '../../../templates/home/navbarHome.html'
				}
			})
})();