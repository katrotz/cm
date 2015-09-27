'use strict';

import Database from './Database.js';

export default function register(ngApplication) {
  return ngApplication
    .service('database', Database)
  ;
}