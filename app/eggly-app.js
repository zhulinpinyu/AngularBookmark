angular.module('Eggly',[
  'ui.router',
  'categories',
  'categories.bookmarks'
])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider.state('eggly', {
    url: '',
    abstract: true
  });
  $urlRouterProvider.otherwise('/');
})
 .controller('MainCtrl',function($scope){
   $scope.currentCategory = null;
   $scope.isCreating = false;
   $scope.isEditing = false;
   $scope.setCurrentCategory = function(category){
     $scope.currentCategory = category;
     $scope.cancelCreating();
     $scope.cancelEditing();
   }

   $scope.isCurrentCategory = function(category){
     return $scope.currentCategory !== null && $scope.currentCategory.name === category.name;
   }

   $scope.startCreating = function(){
     $scope.isCreating = true;
     $scope.isEditing = false;
   }

   $scope.cancelCreating = function(){
     $scope.isCreating = false;
     resetForm();
   }

   $scope.startEditing = function(){
     $scope.isCreating = false;
     $scope.isEditing = true;
   }

   $scope.cancelEditing = function(){
     $scope.isEditing = false;
   }

   $scope.shouldShowCreating = function(){
     return $scope.currentCategory && !$scope.isEditing
   }

   $scope.shouldShowEditing = function(){
     return $scope.isEditing && !$scope.isCreating
   }

   function resetForm(){
     $scope.newBookmark = {
       title: '',
       url: '',
       category: $scope.currentCategory
     };
   }

   $scope.createBookmark = function(bookmark){
     bookmark.id = $scope.bookmarks.length;
     $scope.bookmarks.push(bookmark);
     resetForm();
   }

   $scope.editedBookmark = null;
   $scope.setEditedBookmark = function(bookmark){
     $scope.editedBookmark = angular.copy(bookmark);
   }

   $scope.isSelectedBookmark = function(bookmarkId){
     return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId
   }

   $scope.updateBookmark = function(bookmark){
     var index = _.findIndex($scope.bookmarks,function(b){
       return b.id === bookmark.id
     });
     $scope.bookmarks[index] = bookmark;
     $scope.editedBookmark = null;
     $scope.isEditing = false;
   }

   $scope.removeBookmark = function(bookmark){
     _.remove($scope.bookmarks, function(b){
       return b.id === bookmark.id;
     });
   }

 });
