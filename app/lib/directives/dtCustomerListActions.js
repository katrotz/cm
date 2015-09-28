'use strict';

import template from './dtCustomerListActions.html!text';

export default function dtCustomerListActions() {
  return {
    scope: true,
    template: template,
    controller: ['$scope', '$state', function($scope, $state) {
      $scope.go = $state.go;
    }]
  };
}