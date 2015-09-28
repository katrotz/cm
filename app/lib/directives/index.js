'use strict';

import pageTitle from './pageTitle.js';
import dtCustomerListActions from './dtCustomerListActions.js';

/**
 * Register ng application directives
 * @param ngApplication
 * @returns {*}
 */
export default function register(ngApplication) {
  return ngApplication
    .directive('pageTitle', pageTitle)
    .directive('dtCustomerListActions', dtCustomerListActions);
}