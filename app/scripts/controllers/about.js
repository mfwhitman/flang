'use strict';

/**
 * @ngdoc function
 * @name flangApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flangApp
 */
angular.module('flangApp')
  .controller('AboutCtrl', function ($scope, $stateParams, flangPull) {

    var photo = $stateParams.photo.substring(1);
    var secret = $stateParams.secret.substring(1);
    $scope.status = true;
    $scope.statusMessage = '';

    console.log('photo: ' + photo);
    console.log('secret: ' + secret);

    flangPull.getSizes(photo)
    .then(function(sizelist) {
      var large = _.find(sizelist.sizes.size, function(obj) { return (obj.label === 'Large'); });

      if (large === undefined || large === null) {
        large = sizelist.sizes.size[sizelist.sizes.size.length - 1];
      }

      $scope.image = large.source;
    });
    flangPull.getEXIFdata(photo, secret)
    .then(function(exif) {
      if (exif.stat === 'ok') {
        $scope.status = true;
        $scope.exifData = exif.photo.exif;

        if ($scope.exifData.length === 0) {
          $scope.status = false;
          $scope.statusMessage = 'Sorry, no EXIF data is available for this image.';
        }

      } else {
        $scope.status = false;
        $scope.statusMessage = 'Sorry, you do not have permission to view EXIF data for this image.';
      }

    });
  });
