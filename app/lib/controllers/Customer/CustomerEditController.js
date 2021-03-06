'use strict';

/**
 * Edict customer page
 * @constructor
 */
export default class CustomerEditController{
  /**
   * $inject
   * @static
   * @returns {string[]}
   */
  static get $inject() {
    return ['$state', '$stateParams', '$filter', 'storage'];
  }

  /**
   * Constructor
   * @param $state
   * @param $stateParams
   * @param $filter
   * @param storage
   */
  constructor($state, $stateParams, $filter, storage) {
    this.$filter = $filter;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.storage = storage;
    this.customer = null;
    this.busy = false;

    this.fetch();
  }

  /**
   * Fetch the customer
   * @returns {*}
   */
  fetch() {
    let customerID = this.$stateParams.id;

    return this.storage.get('customers', customerID).then((customer) => {
      this.customer = customer || null;
    });
  }

  /**
   * Store the customer
   * @param form
   */
  save(form) {
    if (form.$valid) {
      this.busy = true;

      //@todo: push into model
      this.customer.Birthday = this.$filter('date')(this.customer.Birthday, 'yyyy-MM-dd');
      this.customer.LastContact = this.$filter('date')(this.customer.LastContact, 'yyyy-MM-dd');

      this.storage.put('customers', this.customer).then(() => {
        this.busy = false;
        this.$state.go('app.customer.list');
      });
    }
  }
}