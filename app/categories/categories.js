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
        }      }
    });
}).controller('CategoriesCtrl',function($scope){});
