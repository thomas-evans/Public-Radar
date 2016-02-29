(function(){
    angular.module('directory').factory('directoryCatagoriesFactory', ['$http', function($http){
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

        function getCategories(){
            return $http({method: 'GET', url: '../data/directory.json'})
                .then(function successCallback(response){
                    var categories = [];
                    angular.forEach(response.data, function(value, key){
                        categories.push(value.type);
                    });
                    categories = uniq(categories);
                    return categories;
                }, function errorCallback(response) {
                    console.log(response);
                });
        }
        return{
            getCategories: getCategories
        };
    }]);
    angular.module('directory').factory('directoryDataFactory', ['$http', '$filter', function($http, $filter){
        function getDirectoryData(a){
            return $http({method: 'GET', url: '../data/directory.json'})
                .then(function successCallback(response){
                    var filteredData = $filter('filter')(response.data, { type: a });
                    return filteredData;
                }, function errorCallback(response) {
                    console.log(response);
                })
        }
        return{
            getDirectoryData : getDirectoryData
        }
    }]);
}());
