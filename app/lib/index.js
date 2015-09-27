'use strict';
import angular from 'angular';
import ngApplication from './ng-module.js';

export default ngApplication;

export function bootstrap() {
  return new Promise((resolve) => {
    angular.element(document).ready(() => {
      try {
        angular.bootstrap(document, [ngApplication.name], {strictDi: true});
      } catch(e) {
        document.body.innerHTML = '<pre>' + e.stack + '</pre>';
      } finally {
        return resolve();
      }
    });
  });
}