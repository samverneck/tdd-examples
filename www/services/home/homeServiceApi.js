(function () {
	'use strict';
	angular
		.module('mk.services')
		.factory('homeServiceApi',homeServiceApi);

		homeServiceApi.$inject = ['$http','config'];

		function homeServiceApi($http,config) {

			var _setProducts = function (objParam) {
				return $http.post(config.baseApiUrl+'products',objParam);
			}

			var _getProducts = function () {
				return $http.get(config.baseApiUrl+'products');
			}

			var _getProductId = function (objParam) {
				return $http.get(config.baseApiUrl+'products',objParam);
			}
			var _deleteProducts = function (objParam) {
				return $http.delete(config.baseApiUrl+'products',objParam);
			}


			return {
				setProducts:_setProducts,
				getProducts:_getProducts,
				getProductId:_getProductId,
				deleteProducts:_deleteProducts,

			}
		}
})();