'use strict';

export default ['$rootScope', '$state', function run($rootScope, $state) {
  $rootScope.$state = $state;
  //$rootScope.$on('$stateChangeStart', function stateChangeStart(event, fromState, toState) {});
}];