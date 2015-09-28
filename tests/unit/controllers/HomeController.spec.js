'use strict';

import HomeController from 'code/lib/controllers/HomeController.js';

describe('HomeController', function() {
  let $state;
  let ctrl;
  let goArgs;

  beforeEach(function() {
    $state = {
      go: function(toState) {
        goArgs = toState;
      }
    };

    spyOn($state, 'go');

    ctrl = new HomeController($state);

  });
  it('should redirect to customers overview state', function() {
    expect($state.go).toHaveBeenCalled();
    expect($state.go).toHaveBeenCalledWith('app.customer.list');
  });
});