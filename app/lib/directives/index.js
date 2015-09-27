'use strict';

import pageTitle from './pageTitle.js';

export default function register(ngApplication) {
  return ngApplication
    .directive('pageTitle', pageTitle);
}