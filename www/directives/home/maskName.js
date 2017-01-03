(function () {
	'use strict';
	angular
		.module('mk.directives')
		.directive('maskName',
			function () {
				return{
					templateUrl: "../../templates/home/maskName.html"
				}
		})
})();