'use strict';

export default class HomeController{
  static get $inject() {
    return ['$state'];
  }

  constructor($state) {
    $state.go('app.customer.list');
  }
}