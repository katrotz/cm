'use strict';

import HomeController from './HomeController.js';
import NotFoundController from './NotFoundController.js';
import CustomerController from './CustomerController.js';
import CustomerCreateController from './Customer/CustomerCreateController.js';
import CustomerEditController from './Customer/CustomerEditController.js';
import CustomerListController from './Customer/CustomerListController.js';
import CustomerNaviController from './Customer/CustomerNaviController.js';

export default function registerControllers(ngApplication) {
  return ngApplication
    .controller('HomeController', HomeController)
    .controller('NotFoundController', NotFoundController)
    .controller('CustomerController', CustomerController)
    .controller('CustomerCreateController', CustomerCreateController)
    .controller('CustomerEditController', CustomerEditController)
    .controller('CustomerListController', CustomerListController)
    .controller('CustomerNaviController', CustomerNaviController)
  ;
}