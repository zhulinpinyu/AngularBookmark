angular.module('Eggly',[
  'ui.router',
  'ngAnimate',
  'categories',
  'categories.bookmarks'
])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider.state('eggly', {
    url: '',
    abstract: true
  });
  $urlRouterProvider.otherwise('/');
});
