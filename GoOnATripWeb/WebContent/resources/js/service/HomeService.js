'use strict';

App.factory('HomeService', ['$http', '$q', function($http, $q){

	return {
		
			searchAction: function(searchObj) {//Fetches category list from server.
				return $http.post('http://localhost:8080/GoOnATripWeb/SearchController/searchAction',searchObj)
					.then(
								function(response){
									return response.data;
								}, 
								function(errResponse){
									console.error('Error while search Action');
									return $q.reject(errResponse);
								}
						);
			}

//			fetchAllItems: function(category) {//Fetches list of item for a specific category.
//					return $http.get('http://localhost:8080/GoOnATripWeb/item/'+category)
//							.then(
//									function(response){
//										return response.data;
//									}, 
//									function(errResponse){
//										console.error('Error while fetching Items');
//										return $q.reject(errResponse);
//									}
//							);
//			},
//		    
//			fetchSpecificItem: function(category,id) {//Fetches a specific item based on category and item id.
//				return $http.get('http://localhost:8080/GoOnATripWeb/item/'+category+'/'+id)
//						.then(
//								function(response){
//									return response.data;
//								}, 
//								function(errResponse){
//									console.error('Error while fetching specific Item');
//									return $q.reject(errResponse);
//								}
//						);
//			}
	};

}]);
