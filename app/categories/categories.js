angular.module('categories',[
  'eggly.models.category'
]).config(function($stateProvider){
  $stateProvider
    .state('eggly.categories',{
      url: '/',
      views: {
        'categories@': {
          controller: 'CategoriesCtrl',
          templateUrl: 'app/categories/categories.tmpl.html'
        },
        'bookmarks@': {
          controller: 'BookmarksCtrl',
          templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
        }
      }
    });
}).controller('CategoriesCtrl',function($scope){})
.controller('BookmarksCtrl',function($scope){});
