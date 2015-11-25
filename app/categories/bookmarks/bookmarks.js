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
          controller: 'BookmarksCtrl',
          controllerAs: 'bookmarksCtrl'
        }
      }
    })
}).controller('BookmarksCtrl',function($stateParams, Bookmark){
  var bookmarksCtrl = this;
  bookmarksCtrl.currentCategoryName = $stateParams.category;
  bookmarksCtrl.bookmarks = Bookmark.getBookmarks();
});
