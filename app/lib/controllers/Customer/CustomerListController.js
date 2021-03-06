'use strict';

/**
 * Angular data table configurations
 * @type {{emptyMessage: string, scrollbarV: boolean, rowHeight: number, columns: *[]}}
 */
let dtOptions = {
  emptyMessage: 'No data found',
  scrollbarV: false,
  rowHeight: 40,
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

      //If during current year we passed birth month or we passed the birthdate in the current month
      if (months > 0 || ((months === 0 && days > 0))) {
        years += 1;
      }

      return years;
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
    width: 200,
    sortable: false,
    cellRenderer: function(scope, elm) {
      return '<dt-customer-list-actions></dt-customer-list-actions>';
    },
    headerRenderer: function() {
      return '<span class=dt-header-cell-label>Actions</span>';
    }
  }]
};

/**
 * List customers page
 * @constructor
 * @property {undefined|*|Array} customers - list of fetched customers
 */
export default class CustomerListController{

  /**
   * $inject
   * @static
   * @returns {string[]}
   */
  static get $inject() {
    return ['$scope', '$timeout', 'storage'];
  }

  /**
   * Constructor
   * @param $scope
   * @param $timeout
   * @param storage
   */
  constructor($scope, $timeout, storage) {
    this.$scope = $scope;
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

  /**
   * Fetch customers
   * @returns {*}
   */
  fetchCustomers() {
    return this.storage.list('customers').then(data => {
      this.customers_ = data;
    }, () => {
      this.customers_ = [];
    });
  }

  /**
   * On customer created callback
   * @param event
   * @param customerIds
   */
  onCustomerCreated() {
    this.fetchCustomers();
  }

  /**
   * On customer modified callback
   * @param event
   * @param customerIds
   */
  onCustomerModified() {
    this.fetchCustomers();
  }

  /**
   * On customer deleted callback
   * @param event
   * @param customerIds
   * @returns {boolean}
   */
  onCustomerDeleted(event, customerIds) {
    if (!this.customers_ || !this.customers_.length) {
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