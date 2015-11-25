angular.module('eggly.models.bookmark',[])
  .factory('Bookmark',function BookmarkFactory($http){
    var URL = {
      FETCH: 'data/bookmarks.json'
    },
    bookmarks;
    var extract = function(result){
      return result.data;
    };

    var cacheBookmarks = function(result){
      bookmarks = extract(result);
      return bookmarks;
    };

    return {
      getBookmarks: function(){
        return $http.get(URL.FETCH).then(cacheBookmarks);
      },
      createBookmark: function(bookmark){
        bookmark.id = bookmarks.length;
        bookmarks.push(bookmark);
      }
    }
  });
