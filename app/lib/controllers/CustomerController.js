'use strict';

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
    console.log('Show modal');
  }

  deleteCustomer(id) {
    return this.storage.remove('customers', id);
  }

  loadFixtures_() {
    return this.storage.loadFixtures()
      .then(() => {
        this.fixturesLoadIndicator_ = false;
      })
      .catch(() => {
        this.fixturesLoadIndicator_ = false;
      });
  }
}