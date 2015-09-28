'use strict';

import ngMock from 'angular-mocks';
import Storage from './../mocks/services/storage.mock.js';
import CustomerListController from 'code/lib/controllers/Customer/CustomerListController.js';

describe('CustomerListController', function() {
  let $rootScope, $scope, $q, $timeout, storage, ctrl;

  beforeEach(ngMock.inject(function(_$rootScope_, _$q_, _$timeout_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    $timeout = _$timeout_;
    storage = new Storage($q, _$rootScope_);

    spyOn(CustomerListController.prototype, 'fetchCustomers').and.callThrough();
    spyOn(storage, 'list').and.callThrough();

    ctrl = new CustomerListController($scope, $timeout, storage);
  }));

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should call fetchCustomers on init', function() {
    expect(ctrl.fetchCustomers).toHaveBeenCalled();
    expect(storage.list).toHaveBeenCalled();
    expect(storage.list).toHaveBeenCalledWith('customers');
  });

  it('should fetch customers', function(done) {
    storage._setDoneCb_(done);
    storage._setResolve_([]);

    ctrl.fetchCustomers();

    jasmine.clock().tick(11);

    expect(ctrl.customers_).toBeDefined();
    expect(storage.list).toHaveBeenCalled();
    expect(storage.list).toHaveBeenCalledWith('customers');
  });

  /*it('should register onCreated, onModified, onDeleted callbacks', function() {

    spyOn(ctrl, 'onCustomerCreated');
    spyOn(ctrl, 'onCustomerModified');
    spyOn(ctrl, 'onCustomerDeleted');

    $rootScope.$apply(function() {
      $rootScope.$broadcast('CREATE::CUSTOMERS');
      $rootScope.$broadcast('MODIFY::CUSTOMERS');
      $rootScope.$broadcast('DELETE::CUSTOMERS');
    });

    expect(ctrl.onCustomerCreated).toHaveBeenCalled();
    expect(ctrl.onCustomerModified).toHaveBeenCalled();
    expect(ctrl.onCustomerDeleted).toHaveBeenCalled();
  });*/
});