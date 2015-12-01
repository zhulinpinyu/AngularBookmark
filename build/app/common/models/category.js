angular.module('eggly.models.category',[])
 .factory('Category',function categoryFactory($http,$q){
   var URL = {
     FETCH: 'data/categories.json'
   },
   categories,
   currentCategory;

   var extract = function(result){
     return result.data
   };

   var cacheCategories = function(result){
     categories = extract(result)
     return categories;
   };

   return {
     getCategories: function(){
       return (categories) ? $q.when(categories) : $http.get(URL.FETCH).then(cacheCategories);
     },
     getCategoryByName: function(categoryName){
       var deferred = $q.defer();
       function findCategory(){
          return _.find(categories,function(c){
            return c.name === categoryName
          });
       };
       if(categories){
         deferred.resolve(findCategory());
       }else{
         this.getCategories().then(function(result){
           deferred.resolve(findCategory());
         });
       };
       return deferred.promise;
     },
     setCurrentCategory: function(categoryName){
       this.getCategoryByName(categoryName).then(function(category){
         currentCategory = category;
       });
     },
     getCurrentCategory: function(){
       return currentCategory;
     },
     getCurrentCategoryName: function(){
       return currentCategory ? currentCategory.name : '';
     }
   }
 });
