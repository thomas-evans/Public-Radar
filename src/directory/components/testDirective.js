(function(){
    'use strict';
    angular.module('directory').directive('testDirective', TestDirective);
    function TestDirective(){
        var directive = {
            link: link,
            templateUrl: 'directory/components/testDirective.tmpl.html',
            replace: true,
            restrict: 'EA'
        };
        return directive;
        function link(scope, element, attrs) {

        }
    }
}());
