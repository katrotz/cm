'use strict';

/**
 * Home page
 * @constructor
 */
export default class HomeController{
  /**
   * $inject
   * @static
   * @returns {string[]}
   */
  static get $inject() {
    return ['$state'];
  }

  /**
   * Constructor
   * @param $state
   */
  constructor($state) {
    $state.go('app.customer.list');
  }
}