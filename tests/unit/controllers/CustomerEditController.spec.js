'use strict';

import ngMock from 'angular-mocks';
import Storage from './../mocks/services/storage.mock.js';
import CustomerEditController from 'code/lib/controllers/Customer/CustomerEditController.js';

describe('CustomerEditController', function() {
  let $scope, $q, $state, $stateParams, $filter, storage, ctrl;

  beforeEach(ngMock.inject(function(_$rootScope_, _$q_, _$filter_) {
    $q = _$q_;
    $filter = _$filter_;
    $scope = _$rootScope_.$new();
    $state = {go: function() {}};
    $stateParams = {id:1};
    storage = new Storage($q, _$rootScope_);
    ctrl = new CustomerEditController($state, $stateParams, $filter, storage);
  }));

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should fetch the customer on init', function(done) {
    storage._setDoneCb_(done);
    storage._setResolve_({id: $stateParams.id});

    spyOn(storage, 'get').and.callThrough();

    ctrl.fetch();

    jasmine.clock().tick(11);

    expect(storage.get).toHaveBeenCalled();
    expect(storage.get).toHaveBeenCalledWith('customers', $stateParams.id);
    expect(ctrl.customer).toBeDefined();
    expect(ctrl.customer.id).toBe($stateParams.id);
  });


  it('should save the customer and display loading indicator', function(done) {
    ctrl.customer = {id: $stateParams.id};

    storage._setDoneCb_(done);
    storage._setResolve_({id: $stateParams.id});

    spyOn($state, 'go');
    spyOn(storage, 'put').and.callThrough();

    expect(ctrl.busy).toBe(false);

    ctrl.save({$valid: true});

    expect(ctrl.busy).toBe(true);

    jasmine.clock().tick(11);

    expect(ctrl.busy).toBe(false);

    expect(storage.done).toHaveBeenCalled();
    expect($state.go).toHaveBeenCalled();
    expect($state.go).toHaveBeenCalledWith('app.customer.list');
  });
});