angular.module('categories.bookmarks.create',[

]).config(function($stateProvider){
  $stateProvider.state('eggly.categories.bookmarks.create',{
    url: '/bookmarks/create',
    templateUrl: 'app/categories/bookmarks/create/create.tmpl.html',
    controller: 'CreateBookmarkCtrl',
    controllerAs: 'createBookmarkCtrl'
  });
}).controller('CreateBookmarkCtrl', function(){

});
