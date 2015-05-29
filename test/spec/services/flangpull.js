'use strict';

describe('Service: flangPull', function () {

  // load the service's module
  beforeEach(module('flangApp'));

  // instantiate service
  var flangPull;
  beforeEach(inject(function (_flangPull_) {
    flangPull = _flangPull_;
  }));

  it('should do something', function () {
    expect(!!flangPull).toBe(true);
  });

});
