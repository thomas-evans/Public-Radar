(function(){
    'use strict';
    angular.module('directory').controller('DirectoryController', DirectoryController);
        DirectoryController.$inject = ['DirectoryCatagoriesFactory', 'DirectoryDataFactory'];
        function DirectoryController(DirectoryCatagoriesFactory, DirectoryDataFactory){
            var self = this;
            self.directoryData = {};
            self.categoryData = [];
            self.displayData = {};
            self.categoryStatus = true;
            self.filterStatus = false;
            self.getData = getData;
            function getCategories(){
                return DirectoryCatagoriesFactory.getCategories().then(function(data){
                    self.categoryData = data;
                });
            }
            getCategories();
            function getData(type){
                return DirectoryDataFactory.getDirectoryData(type).then(function(data){
                    self.displayData = data;
                });
            }
        }
}());
