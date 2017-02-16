(function () {
	'use strict';

	angular
		.module('mk.services')
		.controller('homeServiceApi', homeServiceApi);
		
		homeServiceApi.inject = [];

		function homeServiceApi() {
			var vm = this;
		}
})();