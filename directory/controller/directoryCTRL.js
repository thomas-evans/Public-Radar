(function(){
    angular.module('directory').controller('DirectoryCTRL', ['directoryDataFactory', function(directoryDataFactory){
        var self = this;
        self.directoryData = {};
        self.categoryData = [];
        self.displayData = {};
        self.categoryStatus = true;
        self.filterStatus = false;
        function getData(){
            return directoryDataFactory.getDirectoryData()
            .then(function(data) {
                self.directoryData = data;
                getCategories(self.directoryData);
                console.log(self.categoryData);
                return self.directoryData;
            });
        }
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
        function getCategories(data){
            angular.forEach(data, function(value, key){
                self.categoryData.push(value.type);
            });
            self.categoryData = uniq(self.categoryData);
        }
        getData();
    }]);
}());
