angular.module('eggly.models.bookmark',[])
  .factory('Bookmark',function BookmarkFactory($http){
    var URL = {
      FETCH: 'data/bookmarks.json'
    };
    var extract = function(result){
      return result.data;
    };

    var cacheBookmarks = function(result){
      return extract(result);
    };
    return {
      getBookmarks: function(){
        return $http.get(URL.FETCH).then(cacheBookmarks);
      }
    }
  });
