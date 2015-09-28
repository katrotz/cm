'use strict';

/**
 * Create customer modal
 * @constructor
 */
export default class CustomerCreateController{
  /**
   * $inject
   * @static
   * @returns {string[]}
   */
  static get $inject() {
    return [
      '$modalInstance',
      '$filter',
      'storage'
    ];
  }

  /**
   * Constructor
   * @param $modalInstance
   * @param $filter
   * @param storage
   */
  constructor($modalInstance, $filter, storage) {
    this.$modalInstance = $modalInstance;
    this.$filter = $filter;
    this.storage = storage;
    this.customer = {};
    this.busy = false;
  }

  /**
   * Store the customer and close the modal
   * @param form
   */
  save(form) {
    if (form.$valid) {
      this.busy = true;
      this.customer.Birthday = this.$filter('date')(this.customer.Birthday, 'yyyy-MM-dd');

      this.storage.add('customers', this.customer).then((customerId) => {
        this.busy = false;
        this.$modalInstance.close(customerId);
      });
    }
  }

  /**
   * Close the modal
   */
  cancel() {
    this.$modalInstance.dismiss('cancel');
  }
}