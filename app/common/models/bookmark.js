angular.module('eggly.models.bookmark',[])
  .factory('Bookmark',function BookmarkFactory($http,$q){
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

    var findBookmark = function(bookmarkId){
      return _.find(bookmarks,function(b){
        return b.id === parseInt(bookmarkId,10);
      });
    }

    return {
      getBookmarks: function(){
        var deferred = $q.defer();
        if(bookmarks){
          deferred.resolve(bookmarks);
        }else{
          $http.get(URL.FETCH).then(function(result){
            deferred.resolve(cacheBookmarks(result));
          });
        }
        return deferred.promise;
      },
      createBookmark: function(bookmark){
        bookmark.id = bookmarks.length;
        bookmarks.push(bookmark);
      },
      updateBookmark: function(bookmark){
        var index = _.findIndex(bookmarks, function(b){
          return b.id === bookmark.id;
        });
        bookmarks[index] = bookmark;
      },
      findBookmarkById: function(bookmarkId){
        var deferred = $q.defer();
        if(bookmarks){
          deferred.resolve(findBookmark(bookmarkId));
        }else{
          this.getBookmarks().then(function(){
            deferred.resolve(findBookmark(bookmarkId));
          });
        }
        return deferred.promise;
      },
      deleteBookmark: function(bookmark){
        _.remove(bookmarks,function(b){
          return b.id === bookmark.id;
        });
      }
    }
  });
