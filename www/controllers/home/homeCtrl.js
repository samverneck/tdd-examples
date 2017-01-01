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
		vm.deleteUser = deleteUser;
		
		vm.buscar = {};
		vm.user = {};
		
		function setProducts(objParam) {

			homeServiceApi.setProducts(objParam)
				.then(function (result) {	
					console.log(result.data.data);
					vm.user.push(result.data.data);
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
			var paramDel = {
				id : objParam._id
			}
			homeServiceApi.deleteProducts(paramDel.id)
				.then(function (result) {					
					var index = vm.user.indexOf(objParam);
					vm.user.splice(index, 1);
				});			
			
			

		}
		getProducts();
	}

})();