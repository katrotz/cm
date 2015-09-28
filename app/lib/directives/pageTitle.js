'use strict';

import template from './pageTitle.html!text';

export default function pageTitle() {
  return {
    scope: false,
    transclude: true,
    template: template,
    controllerAs: 'pageTitle',
    controller: ['$rootScope', '$state', function($rootScope, $state) {
      this.title = $state.current && $state.current.data && $state.current.data.title;

      $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        this.title = toState.data && toState.data.title;
      });
    }]
  };
}