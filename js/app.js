'use strict';

var app =
    angular.
        module("myApp",['ngRoute']).
        config(function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeControl'
            });


        })


.controller('HomeControl', [function() {

}]);

