'use strict';

import ngMock from 'angular-mocks';
import Storage from './../mocks/services/storage.mock.js';
import CustomerNaviController from 'code/lib/controllers/Customer/CustomerNaviController.js';

describe('CustomerNaviController', function() {
  let $scope, $q, $stateParams, storage, ctrl;

  beforeEach(ngMock.inject(function(_$rootScope_, _$q_) {
    $q = _$q_;
    $scope = _$rootScope_.$new();
    $stateParams = {id:1};
    storage = new Storage($q, _$rootScope_);
    ctrl = new CustomerNaviController($stateParams, storage);
  }));

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should fetch the customer', function(done) {
    storage._setDoneCb_(done);
    storage._setResolve_({id: $stateParams.id});

    spyOn(storage, 'get').and.callThrough();

    ctrl.fetchCustomer();

    jasmine.clock().tick(11);

    expect(storage.get).toHaveBeenCalled();
    expect(storage.get).toHaveBeenCalledWith('customers', $stateParams.id);
    expect(ctrl.customer_).toBeDefined();
    expect(ctrl.customer_.id).toBe($stateParams.id);
  });

  it('should fetch the analytics', function(done) {
    storage._setDoneCb_(done);
    storage._setResolve_([]);

    spyOn(storage, 'listByIndex').and.callThrough();

    ctrl.fetchAnalytics();

    jasmine.clock().tick(11);

    expect(ctrl.analytics_).toBeDefined();
    expect(storage.listByIndex).toHaveBeenCalled();
    expect(storage.listByIndex).toHaveBeenCalledWith('analytics', 'CustomerID', $stateParams.id);
  });
});