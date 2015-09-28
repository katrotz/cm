'use strict';

import Storage from './Storage.js';

/**
 * Register ng application services
 * @param ngApplication
 * @returns {*|Object}
 */
export default function register(ngApplication) {
  return ngApplication
    .service('storage', Storage)
  ;
}