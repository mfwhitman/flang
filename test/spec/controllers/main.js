'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('flangApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  xit('should set staus to be false', function () {
    expect(scope.status).toBe(false);
  });
});
