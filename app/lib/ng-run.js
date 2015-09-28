'use strict';

/**
 * Ng application run
 */
export default ['$rootScope', '$state', function run($rootScope, $state) {
  $rootScope.$state = $state;
}];