'use strict';

import createCustomerTpl from 'lib/views/modals/customer.create.html!text';

/**
 * Customer namespace controller
 * @constructor
 * @property {*} fixtures - fixtures handler
 * @property {Boolean} fixtures.busy - fixtures loading indicator
 * @property {Function} fixtures.load - fixtures loader
 */
export default class CustomerController{
  /**
   * $inject
   * @static
   * @returns {string[]}
   */
  static get $inject() {
    return ['$scope', '$modal', 'storage'];
  }

  /**
   * Constructor
   * @param $scope
   * @param $modal
   * @param storage
   */
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

  /**
   * Show create customer modal
   */
  showCreateCustomerModal() {
    this.$modal.open({
      template: createCustomerTpl,
      controller: 'CustomerCreateController',
      controllerAs: 'createCtrl'
    });
  }

  /**
   * Delete customer
   * @param id
   * @returns {*}
   */
  deleteCustomer(id) {
    return this.storage.remove('customers', id);
  }

  /**
   * Load fixtures
   * @returns {*}
   * @private
   */
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