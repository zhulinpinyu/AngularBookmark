angular.module('categories.bookmarks.create',[

]).config(function($stateProvider){
  $stateProvider.state('eggly.categories.bookmarks.create',{
    url: '/bookmarks/create',
    templateUrl: 'app/categories/bookmarks/create/create.tmpl.html',
    controller: 'CreateBookmarkCtrl',
    controllerAs: 'createBookmarkCtrl'
  });
}).controller('CreateBookmarkCtrl', function($state,$stateParams,Bookmark){
  var createBookmarkCtrl = this;
  function returnToBookmarks(){
    $state.go('eggly.categories.bookmarks',{category: $stateParams.category});
  }
  createBookmarkCtrl.cancelCreating = function(){
    returnToBookmarks();
  }
  createBookmarkCtrl.createBookmark = function(){
    Bookmark.createBookmark(createBookmarkCtrl.newBookmark);
    returnToBookmarks();
  }

  function resetForm(){
    createBookmarkCtrl.newBookmark = {
      title: '',
      url: '',
      category: $stateParams.category
    }
  }

  resetForm();

});
