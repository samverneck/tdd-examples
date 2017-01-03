(function () {
	'use strict';
	angular
		.module('mk.directives')
		.directive('newRegister', 
			function () {
				return	{
					templateUrl: '../../../templates/register/register.html',
					replace:true
				}
			})
})();