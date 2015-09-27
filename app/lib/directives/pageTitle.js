'use strict';

export default function pageTitle() {
  return {
    scope: false,
    transclude: true,
    templateUrl: 'lib/directives/pageTitle.html',
    controllerAs: 'pageTitle',
    controller: ['$state', function($state) {
      this.title = $state.$current.data && $state.$current.data.title;
    }]
  };
}