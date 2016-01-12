'use strict';

var App = angular.module('myApp',['ui.router','ui.bootstrap']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/category")
	
	$stateProvider
	.state('category', {
		url: "/category",
		templateUrl: 'category',
		controller : "HomeController as vm"
//		resolve: {
//            async: ['ItemService', function(ItemService) {
//                return ItemService.fetchCategoryList();
//           	}]
//        }
	})

//	.state('category.list', {
//		url: '/{sivaId:[A-Za-z]{0,9}}',
//		templateUrl: function(params){ return 'category/' + params.sivaId; },
//		controller : "ItemListController as itemListCtrl",
//		resolve: {
//            async: ['ItemService', '$stateParams', function(ItemService, $stateParams) {
//                return ItemService.fetchAllItems($stateParams.sivaId);
//           	}]
//        }
//	})
//
//	.state('category.list.detail', {
//		url: '/{itemId:[0-9]{1,9}}',
//		templateUrl: function(params){ return 'category/' + params.categoryId +'/'+params.itemId; },
//		controller : "ItemDetailsController as itemDetailsCtrl",
//		resolve: {
//            async: ['ItemService', '$stateParams', function(ItemService, $stateParams) {
//                return ItemService.fetchSpecificItem($stateParams.categoryId, $stateParams.itemId);
//           	}]
//        }
//	})

}]);

