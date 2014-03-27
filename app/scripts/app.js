'use strict';

angular.module('sniperAceApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/calculator.html',
            controller: 'CalculatorCtrl'
        })
      /*  .when('/calculator', {
            templateUrl: 'views/calculator.html',
            controller: 'CalculatorCtrl'
        })*/
        .otherwise({
            redirectTo: '/'
        });
  });
