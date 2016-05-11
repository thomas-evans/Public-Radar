(function(){
    'use strict';
    function uniq(a){
        var seen = {},
            out = [],
            len = a.length,
            j = 0;
        for(var i = 0; i < len; i++){
            var item = a[i];
            if(seen[item] !== 1){
                seen[item] = 1;
                out[j++] = item;
            }
        }
        return out;
    }
    angular.module('directory').factory('DirectoryCatagoriesFactory', DirectoryCatagoriesFactory);
    DirectoryCatagoriesFactory.$inject = ['$http'];
    function DirectoryCatagoriesFactory($http){
        function getCategories(){
            return $http({method: 'GET', url: 'data/directory.json'})
                .then(function successCallback(response){
                    var categories = [];
                    angular.forEach(response.data, function(value, key){
                        categories.push(value.type);
                    });
                    categories = uniq(categories);
                    categories = categories.sort();
                    return categories;
                }, function errorCallback(response) {
                    console.log(response);
                });
        }
        return{
            getCategories: getCategories
        };
    }
}());
