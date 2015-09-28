'use strict';

import ngMock from 'angular-mocks';
import Storage from './../mocks/services/storage.mock.js';
import CustomerController from 'code/lib/controllers/CustomerController.js';

describe('CustomerController', function() {
  let $scope, $modal, $q, storage, ctrl;

  beforeEach(ngMock.inject(function(_$rootScope_, _$q_) {
    $q = _$q_;
    $scope = _$rootScope_.$new();
    $modal = {open: function() {}};
    storage = new Storage($q, _$rootScope_);
    ctrl = new CustomerController($scope, $modal, storage);
  }));

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should open create customer modal', function() {
    spyOn($modal, 'open');
    ctrl.showCreateCustomerModal();
    expect($modal.open).toHaveBeenCalled();
  });

  it('should delete customer', function() {
    spyOn(storage, 'remove');
    ctrl.deleteCustomer(1);
    expect(storage.remove).toHaveBeenCalled();
    expect(storage.remove).toHaveBeenCalledWith('customers', 1);
  });

  it('should display busy indicator when loading fixtures', function(done) {

    storage._setDelay_(10);
    storage._setShouldFail_(false);
    storage._setDoneCb_(done);

    spyOn(storage, 'loadFixtures').and.callThrough();

    expect(ctrl.fixtures.busy).toBeFalsy();

    ctrl.fixtures.load();

    expect(ctrl.fixtures.busy).toBeTruthy();

    jasmine.clock().tick(11);

    expect(storage.loadFixtures).toHaveBeenCalled();
    expect(ctrl.fixtures.busy).toBeFalsy();
  });
});