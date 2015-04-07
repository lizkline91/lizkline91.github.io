'use strict';

var app =
    angular.
        module("myApp",['ngRoute']).
        config(function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeControl'
            });
            $routeProvider.when('/resume', {
                templateUrl: 'views/resume.html',
                controller: 'HomeControl'
            });


        })


.controller('HomeControl', [function() {

}]);

