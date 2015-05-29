'use strict';

/**
 * @ngdoc overview
 * @name flangApp
 * @description
 * # flangApp
 *
 * Main module of the application.
 */
angular
  .module('flangApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('about', {
      url: '/about:photo/:secret',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    });
});
  /*.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about:photo/:secret', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });*/
