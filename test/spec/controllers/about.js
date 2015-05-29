'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('flangApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  xit('should set the status to be true', function () {
    expect(scope.status).toBe(true);
  });
});
