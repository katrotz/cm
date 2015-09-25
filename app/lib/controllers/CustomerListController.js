'use strict';

export default class CustomerListController{
  static get $inject() {
    return ['$rootScope'];
  }

  constructor($rootScope) {
    console.log('RootScope: ', $rootScope);
  }
}