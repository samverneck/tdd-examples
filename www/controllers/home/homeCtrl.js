(function () {
	'use strict';
	angular
	.module('mk.controllers')
	.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['homeServiceApi','toaster'];

	function homeCtrl(homeServiceApi,toaster) {
		var vm = this;
		vm.setProducts = setProducts;
		vm.deleteUser = deleteUser;
		vm.getProducts = getProducts;
		vm.editProducts = editProducts;
		vm.getProductId = getProductId;
		vm.cad = {};
		vm.message = '';
		vm.search = {};
		vm.product = {};
		vm.editable = false;
		
		function editProducts(objParam) {						
			vm.cad.name = objParam.name;			 
			vm.editable = true;			
		}

		function setProducts(objParam) {
		
			if(!vm.editable){
				if (objParam != undefined && objParam != ''){			
				homeServiceApi.setProducts(objParam) 
					.then(function (result) {	
						console.log(result.data.data);
							vm.product.push(result.data.data);						
					});
				}
				else{			
					vm.message = 'Please, insert one product name';
				}
			}else{
				updateProducts(objParam);
			}
		}

		function getProducts() {
			homeServiceApi.getProducts()
				.then(function (result) {
					vm.product = result.data.data;
					console.log(vm.product);
				});
		}

		function updateProducts(objParam){		
			console.log(vm.product);

			for (var product in vm.product){
				if(vm.product[product].name == objParam.name){
					var paramAlter = {
						_id: vm.product[product]._id,
						name: objParam.name
					}
					homeServiceApi.putProducts(paramAlter)
					.then(function (result) {
						console.log(result);
					});
				}
				
			}
		}

		function getProductId(objParam) {
			// console.log(objParam);
			var paramId = {
				_id : objParam._id
			}			
			homeServiceApi.getProductId(paramId)
				.then(function (result) {
					console.log(result);					
				});
		}

		function deleteUser(objParam) {			
			var paramDel = {
				_id : objParam._id
			}			
			homeServiceApi.deleteProducts(paramDel)
				.then(function (result) {					
					console.log(result);
					var index = vm.product.indexOf(objParam);
					vm.product.splice(index, 1);
				});	
		}
		getProducts();
	}

})();