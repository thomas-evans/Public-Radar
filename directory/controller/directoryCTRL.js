(function(){
    angular.module('directory').controller('DirectoryCTRL', ['directoryCatagoriesFactory', 'directoryDataFactory', function(directoryCatagoriesFactory, directoryDataFactory){
        var self = this;
        self.directoryData = {};
        self.categoryData = [];
        self.displayData = {};
        self.categoryStatus = true;
        self.filterStatus = false;
        self.getData = getData;
        function getCategories(){
            return directoryCatagoriesFactory.getCategories().then(function(data){
                self.categoryData = data;
            });
        }
        getCategories();
        function getData(type){
            return directoryDataFactory.getDirectoryData(type).then(function(data){
                self.displayData = data;
            });
        }
    }]);
}());
