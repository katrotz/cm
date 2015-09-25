'use strict';

import CustomerCreateController from './CustomerCreateController.js';
import CustomerEditController from './CustomerEditController.js';
import CustomerListController from './CustomerListController.js';
import CustomerNaviController from './CustomerNaviController.js';

export default function registerControllers(ngApplication) {
  return ngApplication
    .controller('CustomerCreateController', CustomerCreateController)
    .controller('CustomerEditController', CustomerEditController)
    .controller('CustomerListController', CustomerListController)
    .controller('CustomerNaviController', CustomerNaviController)
  ;
}