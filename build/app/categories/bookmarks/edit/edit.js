angular.module('categories.bookmarks.edit',[

]).config(function($stateProvider){
  $stateProvider.state('eggly.categories.bookmarks.edit',{
    url: '/bookmarks/:bookmarkId/edit',
    templateUrl: 'app/categories/bookmarks/edit/edit.tmpl.html',
    controller: 'EditBookmarkCtrl',
    controllerAs: 'editBookmarkCtrl'
  });
}).controller('EditBookmarkCtrl', function($state,$stateParams,Bookmark){
  var editBookmarkCtrl = this;
  function returnToBookmarks(){
    $state.go('eggly.categories.bookmarks',{category: $stateParams.category});
  }

  editBookmarkCtrl.cancelEditing = function(){
    returnToBookmarks();
  }

  Bookmark.findBookmarkById($stateParams.bookmarkId).then(function(bookmark){
    if(bookmark){
      editBookmarkCtrl.bookmark = bookmark;
      editBookmarkCtrl.editedBookmark = angular.copy(editBookmarkCtrl.bookmark);
    }else{
      returnToBookmarks();
    }
  });

  editBookmarkCtrl.updateBookmark = function(){
    editBookmarkCtrl.bookmark = angular.copy(editBookmarkCtrl.editedBookmark);
    Bookmark.updateBookmark(editBookmarkCtrl.editedBookmark);
    returnToBookmarks();
  }
});
