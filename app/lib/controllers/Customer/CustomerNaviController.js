'use strict';

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

  fetchCustomer() {
    let customerId = this.$stateParams.id;

    return this.storage.get('customers', customerId).then(data => {
      this.customer_ = data;
    });
  }

  fetchAnalytics() {
    let customerId = this.$stateParams.id;

    return this.storage.listByIndex('analytics', 'CustomerID', customerId).then(data => {
      this.analytics_ = data;
    }, () => {
      this.analytics_ = [];
    });
  }
}