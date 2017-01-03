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
		vm.keypress 	= keypress;
		vm.cad = {};
		vm.user = {};
		vm.message = '';
		vm.search = {};
		vm.product = {};
		var editable = false;
		
		function editProducts(objParam) {
			vm.user = objParam;			
			vm.cad.name = objParam.name;		 
			editable = true;		
		}

		function keypress(e,objParam) {			
			if(e.keyCode == 13)
				setProducts(objParam);
		}

		function setProducts(objParam) {
		
			if(!editable){
				if (objParam != undefined && objParam != ''){			
				homeServiceApi.setProducts(objParam) 
					.then(function (result) {	
						console.log(result.data.data);
						vm.product.unshift(result.data.data);						
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
				});
		}

		function updateProducts(objParam){
			objParam._id = vm.user._id;	
			homeServiceApi.getProductId(objParam._id)
				.then(function (result) {					 
					console.log(result.data.data);
					 homeServiceApi.putProducts(objParam)
					  	.then(function (result) {
					  		getProducts();
					  	});
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