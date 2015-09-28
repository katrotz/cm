'use strict';

import ngMock from 'angular-mocks';
import Storage from './../mocks/services/storage.mock.js';
import CustomerCreateController from 'code/lib/controllers/Customer/CustomerCreateController.js';

describe('CustomerCreateController', function() {
  let $scope, $modalInstance, $q, $filter, storage, ctrl;

  beforeEach(ngMock.inject(function(_$rootScope_, _$q_, _$filter_) {
    $q = _$q_;
    $filter = _$filter_;
    $scope = _$rootScope_.$new();
    $modalInstance = {close: function(){}, dismiss: function(){}};
    storage = new Storage($q, _$rootScope_);
    ctrl = new CustomerCreateController($modalInstance, $filter, storage);
  }));

  it('should close create customer modal', function() {
    spyOn($modalInstance, 'dismiss');
    ctrl.cancel();
    expect($modalInstance.dismiss).toHaveBeenCalled();
  });

  it('should save the customer when the form is valid', function() {
    spyOn(storage, 'add').and.callThrough();
    ctrl.save({$valid: true});
    expect(storage.add).toHaveBeenCalled();
  });

  it('should not save the customer when the form is not valid', function() {
    spyOn(storage, 'add').and.callThrough();
    ctrl.save({$valid: false});
    expect(storage.add).not.toHaveBeenCalled();
  });
});