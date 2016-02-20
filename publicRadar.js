(function (){
    'use strict';
    var publicRadar = angular.module('publicRadar', ['ngRoute']);
    publicRadar.config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'publicRadar.tmpl.html',
            controller: 'PublicRadarCTRL'
        })
    }]);
    publicRadar.controller('PublicRadarCTRL', [function(){
        var self = this;
    }])
}());
