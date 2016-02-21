(function (){
    'use strict';
    var publicRadar = angular.module('publicRadar', ['ngRoute', 'directory', 'classifieds', 'stories', 'weather']);
    publicRadar.config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'publicRadar.tmpl.html',
            controller: 'PublicRadarCTRL',
            controllerAs: 'public'
        })
        .when('/directory', {
            templateUrl: 'directory/directory.tmpl.html',
            controller: 'DirectoryCTRL',
            controllerAs: 'directory'
        })
        .when('/classifieds', {
            templateUrl: 'classifieds/classifieds.tmpl.html',
            controller: 'ClassifiedsCTRL',
            controllerAs: 'classifieds'
        })
        .when('/stories', {
            templateUrl: 'stories/stories.tmpl.html',
            controller: 'StoriesCTRL',
            controllerAs: 'stories'
        })
        .when('/weather', {
            templateUrl: 'weather/weather.tmpl.html',
            controller: 'WeatherCTRL',
            controllerAs: 'weather'
        })
        .otherwise({
            redirectTo: '/'
        });
    }]);
    publicRadar.controller('PublicRadarCTRL', [function(){
        var self = this;
    }])
}());
// 02/21/2016 4hrs
