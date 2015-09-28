'use strict';

import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-bootstrap';
import 'angular-data-table/release/dataTable.es6.js';
import 'angular-data-table/release/dataTable.css!';
import registerControllers from './controllers/index.js';
import registerDirectives from './directives/index.js';
import registerFilters from './filters/index.js';
import registerServices from './services/index.js';
import configCallback from './ng-config.js';
import runCallback from './ng-run.js';

export var applicationName = 'cm';

/**
 * Define ng application
 */
var ngApplication = angular.module(applicationName, [
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'data-table'
  ])
  .config(configCallback)
  .run(runCallback);

/**
 * Register application components
 */
registerControllers(ngApplication);
registerDirectives(ngApplication);
registerFilters(ngApplication);
registerServices(ngApplication);

export default ngApplication;