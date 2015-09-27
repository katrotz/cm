'use strict';

export default class CustomerListController{
  static get $inject() {
    return ['$scope', 'database'];
  }

  constructor($scope, db) {
    $scope.data = [
      { name: 'Austin', gender: 'Male' },
      { name: 'Marjan', gender: 'Male' }
    ];

    $scope.options = {
      scrollbarV: false,
      columns: [{
        name: 'Name',
        width: 300
      }, {
        name: 'Gender'
      }]
    };

    db.customers.toArray()
      .then(function(customers) {console.log(customers);}, function(reason) {console.log(reason);});

  }
}