'use strict';

export default class CustomerCreateController{
  static get $inject() {
    return [
      '$modalInstance',
      '$filter',
      'storage'
    ];
  }

  constructor($modalInstance, $filter, storage) {
    this.$modalInstance = $modalInstance;
    this.$filter = $filter;
    this.storage = storage;
    this.customer = {};
    this.busy = false;
  }

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

  cancel() {
    this.$modalInstance.dismiss('cancel');
  }
}