'use strict';

import 'styles/main.css!';
import 'styles/material_dt.css!';

import angular from 'angular';
import ngApplication from './ng-module.js';

export default ngApplication;

/**
 * Bootstrap the application on demand
 * @returns {Promise}
 */
export function bootstrap() {
  return new Promise((resolve) => {
    angular.element(document).ready(() => {
      try {
        angular.bootstrap(document, [ngApplication.name], {strictDi: false});
      } catch(e) {
        document.body.innerHTML = '<pre>' + e.stack + '</pre>';
      } finally {
        return resolve();
      }
    });
  });
}