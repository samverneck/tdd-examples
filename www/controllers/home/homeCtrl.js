(function () {
	'use strict';
	angular
	.module('mk.controllers')
	.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['homeServiceApi','toaster','$routeParams'];

	function homeCtrl(homeServiceApi,toaster,$routeParams) {
		var vm = this;
		vm.setProducts = setProducts;
		vm.deleteUser = deleteUser;
		vm.getProducts = getProducts;
		vm.editProducts = editProducts;
		vm.keypress 	= keypress;
		vm.cleanFields = cleanFields;
		vm.routeParams = $routeParams;
		vm.cad = {};
		vm.user = {};
		vm.message = '';
		vm.search = {};
		vm.product = {};
		var editable = false;
		console.log(vm.routeParams);
		function cleanFields() {
			vm.cad.name = '';
		}

		function editProducts(objParam) {
			vm.user = objParam;			
			vm.cad.name = objParam.name;		 
			editable = true;		
		}

		function keypress(e,objParam) {			
			if(e.keyCode == 13){
				if(objParam.name){
					setProducts(objParam);
				}
				else{
					vm.message = 'Please, insert a name'
				}
			}
		}

		function setProducts(objParam) {
		
			if(!editable){
				if (objParam != undefined && objParam != ''){			
				homeServiceApi.setProducts(objParam) 
					.then(function (result) {	
						vm.product.unshift(result.data.data);						
						cleanFields();
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
					vm.product = result.data.data.reverse();				
				});
		}

		function updateProducts(objParam){
			objParam._id = vm.user._id;	
			homeServiceApi.getProductId(objParam._id)
				.then(function (result) {					 
					 homeServiceApi.putProducts(objParam)
					  	.then(function (result) {
					  		getProducts();
					  		cleanFields();
					  	});
				});
		}

		function deleteUser(objParam) {			
			var paramDel = {
				_id : objParam._id
			}			
			homeServiceApi.deleteProducts(paramDel)
				.then(function (result) {					
					var index = vm.product.indexOf(objParam);
					vm.product.splice(index, 1);
				});	
		}
		getProducts();
	}

})();