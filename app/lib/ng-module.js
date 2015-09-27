'use strict';

import 'angular-ui-router';
import 'angular-bootstrap';
import 'angular-data-table/release/dataTable.helpers.min.js';
import 'angular-data-table/release/dataTable.css!';
import registerControllers from './controllers/index.js';
import registerDirectives from './directives/index.js';
import registerFilters from './filters/index.js';
import registerServices from './services/index.js';
import configCallback from './ng-config.js';
import runCallback from './ng-run.js';

export var applicationName = 'cm';

var ngApplication = angular.module(applicationName, [
    'ui.router',
    'ui.bootstrap',
    'data-table'
  ])
  .config(configCallback)
  .run(runCallback);

registerControllers(ngApplication);
registerDirectives(ngApplication);
registerFilters(ngApplication);
registerServices(ngApplication);

export default ngApplication;