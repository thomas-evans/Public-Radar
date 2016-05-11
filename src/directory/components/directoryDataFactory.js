(function(){
    'use strict';
    angular.module('directory').factory('DirectoryDataFactory', DirectoryDataFactory);
    DirectoryDataFactory.$inject = ['$http', '$filter'];
    function DirectoryDataFactory($http, $filter){
        function getDirectoryData(a){
            return $http({method: 'GET', url: 'data/directory.json'})
                .then(function successCallback(response){
                    var filteredData = $filter('filter')(response.data, { type: a });
                    return filteredData;
                }, function errorCallback(response) {
                    console.log(response);
                });
        }
        return{
            getDirectoryData : getDirectoryData
        };
    }
}());
