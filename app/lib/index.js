'use strict';
import angular from 'angular';
import ngApplication from './ng-module.js';

export default ngApplication;

export function bootstrap() {
  angular.element(document).ready(function() {
    try {
      angular.bootstrap(document, [ngApplication.name], {strictDi: true});
    } catch(e) {
      document.body.innerHTML = '<pre>' + e.stack + '</pre>';
    } finally {
      document.body.classList.remove('splash');
    }
  });
}