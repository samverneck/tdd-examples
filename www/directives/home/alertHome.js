(function () {
	'use strict';
	angular
		.module('mk.directives')
		.directive('alertHome', 
			function () {
				return	{
					templateUrl: '../../../templates/home/alertHome.html',
					replace:true
				}
			})
})();