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
}).controller('BookmarksCtrl',function($stateParams, Category, Bookmark){
  var bookmarksCtrl = this;
  Category.setCurrentCategory($stateParams.category);
  Bookmark.getBookmarks().then(function(result){
    bookmarksCtrl.bookmarks = result;
  });
  bookmarksCtrl.getCurrentCategoryName = Category.getCurrentCategoryName;
  bookmarksCtrl.getCurrentCategory = Category.getCurrentCategory;
});
