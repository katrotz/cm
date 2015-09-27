'use strict';

let dtOptions = {
  emptyMessage: 'No data found',
  scrollbarV: false,
  columns: [{
    name: 'ID',
    prop: 'CustomerID',
    sortable: false,
    width: 30
  }, {
    name: 'First Name',
    prop: 'FirstName'
  }, {
    name: 'Last Name',
    prop: 'LastName',
    sort: 'asc'
  }, {
    name: 'Age',
    prop: 'Birthday',
    cellDataGetter: function(birthdate) {
      let years = (new Date()).getYear() - (new Date(birthdate)).getYear();
      let months = (new Date()).getMonth() - (new Date(birthdate)).getMonth();
      let days = (new Date()).getDate() - (new Date(birthdate)).getDate();

      //If during current year we passed birth month or we are currently in
      if (months > 0 || ((months === 0 && days > 0))) {
        years += 1;
      }

      return years;
      //return Math.ceil(Math.abs((new Date()).getTime() - (new Date(birthdate)).getTime()) / (1000 * 3600 * 24 * 31 * 12));
    },
    sortable: false
  }, {
    name: 'Gender',
    prop: 'Gender',
    sortable: false
  }, {
    name: 'Last Contact',
    prop: 'LastContact',
    sortable: false
  }, {
    name: 'Lifetime Value',
    prop: 'CustomerLifetimeValue',
    sortable: false
  }, {
    minWidth: 200,
    sortable: false,
    cellRenderer: function(scope, elm) {
      return '<dt-customer-list-actions></dt-customer-list-actions>';
    },
    headerRenderer: function() {
      return '<span class=dt-header-cell-label>Actions</span>';
    }
  }]
};

export default class CustomerListController{

  static get $inject() {
    return ['$scope', '$modal', '$timeout', 'storage'];
  }

  constructor($scope, $modal, $timeout, storage) {
    this.$scope = $scope;
    this.$modal = $modal;
    this.$timeout = $timeout;
    this.storage = storage;
    this.customers_ = undefined;
    this.dt = {
      options: dtOptions
    };

    $scope.$on('CREATE::CUSTOMERS', this.onCustomerCreated.bind(this));
    $scope.$on('MODIFY::CUSTOMERS', this.onCustomerModified.bind(this));
    $scope.$on('DELETE::CUSTOMERS', this.onCustomerDeleted.bind(this));

    this.fetchCustomers();
  }

  get customers() {
    return this.customers_;
  }

  fetchCustomers() {
    return this.storage.list('customers').then(data => {
      this.customers_ = data;
    }, () => {
      this.customers_ = [];
    });
  }

  onCustomerCreated(event, customerIds) {
    this.fetchCustomers();
  }

  onCustomerModified(event) {
    console.log(event);
  }

  onCustomerDeleted(event, customerIds) {
    if (!this.customers_ && !this.customers_.length) {
      return false;
    }

    if (!Array.isArray(customerIds)) {
      customerIds = [customerIds];
    }

    this.customers_.forEach((customer, idx) => {
      if (customerIds.indexOf(customer.CustomerID) >= 0) {
        this.$timeout(() => {
          this.customers_.splice(idx, 1);
        });
      }
    });
  }
}