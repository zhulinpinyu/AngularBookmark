angular.module('eggly.models.category',[])
 .factory('Category',function categoryFactory(){
   categories = [
       {"id": 0, "name": "Development"},
       {"id": 1, "name": "Design"},
       {"id": 2, "name": "Exercise"},
       {"id": 3, "name": "Humor"}
   ];
   return {
     getCategories: function(){
       return categories;
     }
   }
 });
