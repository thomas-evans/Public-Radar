(function(){
    angular.module('directory').factory('directoryDataFactory', ['$http', function($http){
        function getDirectoryData(){
            return $http({
                    method: 'GET',
                    url: '../data/directory.json'
                })
                .then(function successCallback(response){
                    return response.data;
                }, function errorCallback(response) {
                    console.log(response);
                });
        }
        return{
            getDirectoryData: getDirectoryData
        };
    }]);
}());
