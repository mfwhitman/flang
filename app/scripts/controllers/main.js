'use strict';

/**
 * @ngdoc function
 * @name flangApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flangApp
 */
angular.module('flangApp')
  .controller('MainCtrl', function ($scope, $timeout, $location, $routeParams, $rootScope, flangPull) {

    var timeout;
    $scope.status = false;

    //If user navigates back, perform search again
    if ($rootScope.currentSearch) {
      $scope.query = $rootScope.currentSearch;

      flangPull.getSearch($rootScope.currentSearch)
      .then(function(searchresults) {
        $scope.retrievedPhotos = searchresults.photos.photo;
      });
    }

    $scope.search = function () {

      $rootScope.currentSearch = $scope.query;
      $scope.statusMessage = 'Loading...';
      $scope.status = true;

      if (timeout) {
        $timeout.cancel(timeout);
      }

      timeout = $timeout(function() {
        var formattedQuery = $scope.query.replace(/[ ,]+/g, ',');
        flangPull.getSearch(formattedQuery)
        .then(function(searchresults) {
          $scope.retrievedPhotos = searchresults.photos.photo;
          $scope.statusMessage = 'Done! (' + $scope.retrievedPhotos.length + ' images found)';
        });
      }, 1000);
    };

    $scope.info = function (id, secret) {
      $location.path('/about:' + id + '/' + secret);
    };

  });
