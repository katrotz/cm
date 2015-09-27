'use strict';

import Storage from './Storage.js';

export default function register(ngApplication) {
  return ngApplication
    .service('storage', Storage)
  ;
}