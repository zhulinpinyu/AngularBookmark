angular.module('categories',[
  'eggly.models.category'
]).config(function($stateProvider){
  $stateProvider
    .state('eggly.categories',{
      url: '/',
      views: {
        'categories@': {
          controller: 'CategoriesCtrl',
          controllerAs: 'categoriesCtrl',
          templateUrl: 'app/categories/categories.tmpl.html'
        },
        'bookmarks@': {
          templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
          controller: 'BookmarksCtrl',
          controllerAs: 'bookmarksCtrl'
        }
      }
    });
}).controller('CategoriesCtrl',function(Category){
  var categoriesCtrl = this;
  Category.getCategories().then(function(result){
    categoriesCtrl.categories = result;
  });
});
