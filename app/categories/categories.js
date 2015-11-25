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
        }
      }
    });
}).controller('CategoriesCtrl',function(Category){
  var categoriesCtrl = this;
  categoriesCtrl.categories = Category.getCategories();
});
