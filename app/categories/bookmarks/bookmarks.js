angular.module('categories.bookmarks',[
  'eggly.models.bookmark',
  'eggly.models.category',
  'categories.bookmarks.create',
  'categories.bookmarks.edit'
]).config(function($stateProvider) {
  $stateProvider
    .state('eggly.categories.bookmarks',{
      url: 'categories/:category',
      views: {
        'bookmarks@': {
          templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
          controller: 'BookmarksCtrl'
        }
      }
    })
}).controller('BookmarksCtrl',function($scope,$stateParams){
  $scope.current_category = $stateParams.category;
});
