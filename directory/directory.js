(function(){
    'use strict';
    var directory = angular.module('directory', []);
    directory.factory('directoryDataFactory', ['$http', function($http){
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
    directory.controller('DirectoryCTRL', ['directoryDataFactory', function(directoryDataFactory){
        var self = this;
        self.directoryData = {};
        function getData(){
            return directoryDataFactory.getDirectoryData()
            .then(function(data) {
            self.directoryData = data;
            return self.directoryData;
            });
        }
        getData();
    }]);
}());
