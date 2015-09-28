'use strict';

import createCustomerTpl from 'lib/views/modals/customer.create.html!text';

export default class CustomerController{
  static get $inject() {
    return ['$scope', '$modal', 'storage'];
  }

  constructor($scope, $modal, storage) {
    this.$scope = $scope;
    this.$modal = $modal;
    this.storage = storage;

    this.fixturesLoadIndicator_ = false;
  }

  get fixtures() {
    let _this = this;
    return {
      busy: _this.fixturesLoadIndicator_,
      load() {return _this.loadFixtures_();}
    };
  }

  showCreateCustomerModal() {
    this.$modal.open({
      template: createCustomerTpl,
      controller: 'CustomerCreateController',
      controllerAs: 'createCtrl'
    });
  }

  deleteCustomer(id) {
    return this.storage.remove('customers', id);
  }

  loadFixtures_() {
    this.fixturesLoadIndicator_ = true;
    return this.storage.loadFixtures()
      .then(() => {
        this.fixturesLoadIndicator_ = false;
      })
      .catch(() => {
        this.fixturesLoadIndicator_ = false;
      });
  }
}