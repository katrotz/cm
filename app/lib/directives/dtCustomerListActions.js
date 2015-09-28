'use strict';

import template from './dtCustomerListActions.html!text';

/**
 * Customer list directive factory
 * @returns {{scope: boolean, template, controller: *[]}}
 */
export default function dtCustomerListActions() {
  return {
    scope: true,
    template: template,
    controller: ['$scope', '$state', function($scope, $state) {
      $scope.go = $state.go;
    }]
  };
}