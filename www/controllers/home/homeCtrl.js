(function () {
	'use strict';
	angular
	.module('mk.controllers')
	.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['homeServiceApi'];

	function homeCtrl(homeServiceApi) {
		var vm = this;
		vm.setProducts = setProducts;
		vm.getProducts = getProducts;
		vm.buscar = {};
		vm.user = {};
		
		function setProducts(objParam) {
			homeServiceApi.setProducts(objParam)
				.then(function (result) {
					console.log(result);
				});
		}

		function getProducts() {
			homeServiceApi.getProducts()
				.then(function (result) {
					vm.user = result.data.data;
					console.log(result.data.data);
				});
		}

		function updateProducts(objParam){
			
			homeServiceApi.putProducts(objParam)
				.then(function (result) {
					console.log(result);
				});
		}

		function getProductsId(objParam) {
			homeServiceApi.getProductsId()
				.then(function (objParam) {
					
				});
		}

		function deleteUser(objParam) {
			var index = vm.user.indexOf(objParam);
			vm.user.splice(index, 1);
			

		}
		getProducts();
	}

})();