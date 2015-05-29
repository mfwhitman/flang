'use strict';

/**
 * @ngdoc service
 * @name flangApp.flangPull
 * @description
 * # flangPull
 * Provider in the flangApp.
 */
angular.module('flangApp')
  .provider('flangPull', function () {

    var base = 'https://api.flickr.com/services';
    var apiKey = '239125bcc03d4efa36227d1e4eec735a';

    this.setApiKey = function(key) {
      apiKey = key || apiKey;
    };

    this.$get = function ($q, $http) {

      var service = {
        getPublicFeed: function(query) {
          var d = $q.defer();

          $http({
            method: 'JSONP',
            url: base + '/feeds/photos_public.gne?',
            params: {
              'api_key': apiKey,
              'jsoncallback': 'JSON_CALLBACK',
              'format': 'json',
              'tags': query
            }
          }).success(function(data) {
            d.resolve(data);
            console.log('getPublicFeed: ');
            console.log(data);
          }).error(function(reason) {
            d.reject(reason);
          });

          return d.promise;
        },

        getSearch: function(query) {
          var d = $q.defer();

          $http({
            method: 'JSONP',
            url: base + '/rest/?method=flickr.photos.search&format=json',
            params: {
              'api_key': apiKey,
              'jsoncallback': 'JSON_CALLBACK',
              'format': 'json',
              'tags': query,
              'extras': 'url_z', //Requests URLs for imgs, 640 (z) on longest dimension.
              'per_page': 10
            }
          }).success(function(data) {
            d.resolve(data);
            console.log('getSearch: ');
            console.log(data);
          }).error(function(reason) {
            d.reject(reason);
          });

          return d.promise;
        },

        getEXIFdata: function(photoId, secret) {
          var d = $q.defer();

          $http({
            method: 'JSONP',
            url: base + '/rest/?method=flickr.photos.getExif&format=json',
            params: {
              'api_key': apiKey,
              'jsoncallback': 'JSON_CALLBACK',
              'format': 'json',
              'photo_id': photoId,
              'secret': secret
            }
          }).success(function(data) {
            d.resolve(data);
            console.log('getEXIFdata: ');
            console.log(data);
          }).error(function(reason) {
            d.reject(reason);
          });

          return d.promise;
        },

        getSizes: function(photoId) {
          var d = $q.defer();

          $http({
            method: 'JSONP',
            url: base + '/rest/?method=flickr.photos.getSizes&format=json',
            params: {
              'api_key': apiKey,
              'jsoncallback': 'JSON_CALLBACK',
              'format': 'json',
              'photo_id': photoId
            }
          }).success(function(data) {
            d.resolve(data);
            console.log('getSizes: ');
            console.log(data);
          }).error(function(reason) {
            d.reject(reason);
          });

          return d.promise;
        }
      };

      return service;
    };
  });
