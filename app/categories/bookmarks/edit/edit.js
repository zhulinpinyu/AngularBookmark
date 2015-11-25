angular.module('categories.bookmarks.edit',[

]).config(function($stateProvider){
  $stateProvider.state('eggly.categories.bookmarks.edit',{
    url: '/bookmarks/:bookmarkId/edit',
    templateUrl: 'app/categories/bookmarks/edit/edit.tmpl.html',
    controller: 'EditBookmarkCtrl',
    controllerAs: 'editBookmarkCtrl'
  });
}).controller('EditBookmarkCtrl', function(){

});
