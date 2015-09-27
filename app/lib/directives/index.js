'use strict';

import pageTitle from './pageTitle.js';
import dtCustomerListActions from './dtCustomerListActions.js';

export default function register(ngApplication) {
  return ngApplication
    .directive('pageTitle', pageTitle)
    .directive('dtCustomerListActions', dtCustomerListActions)
    ;
}