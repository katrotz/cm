'use strict';

/**
 * Angular data table configurations
 * @type {{emptyMessage: string, scrollbarV: boolean, columns: *[]}}
 */
let dtOptions = {
  emptyMessage: 'No data found',
  scrollbarV: false,
  columns: [{
    name: 'Page',
    prop: 'Pages'
  }, {
    name: 'Timestamp',
    prop: 'Timestamp',
  }]
};


/**
 * Display customer analytics data
 * @constructor
 * @property {undefined|*|Array} analytics - customers analytics data
 * @property {*} customer - customers data
 * @property {*} customerName - customers full name
 */
export default class CustomerNaviController{
  static get $inject() {
    return ['$stateParams', 'storage'];
  }

  constructor($stateParams, storage) {
    this.$stateParams = $stateParams;
    this.storage = storage;
    this.analytics_ = undefined;
    this.customer_ = undefined;
    this.dt = {
      options: dtOptions
    };

    this.fetchCustomer();
    this.fetchAnalytics();
  }

  get analytics() {
    return this.analytics_;
  }

  get customer() {
    return this.customer_;
  }

  get customerName() {
    if (!this.customer_) {
      return 'not available';
    }

    return this.customer_.FirstName + ' ' + this.customer_.LastName;
  }

  /**
   * Fetch customer data
   * @returns {*}
   */
  fetchCustomer() {
    let customerId = this.$stateParams.id;

    return this.storage.get('customers', customerId).then(data => {
      this.customer_ = data;
    });
  }

  /**
   * Fetch analytics data
   * @returns {*}
   */
  fetchAnalytics() {
    let customerId = this.$stateParams.id;

    return this.storage.listByIndex('analytics', 'CustomerID', customerId).then(data => {
      this.analytics_ = data;
    }, () => {
      this.analytics_ = [];
    });
  }
}