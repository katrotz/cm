'use strict';

export var states = {
  app: {
    url: '',
    abstract: false,
    views: {
      layout: {
        templateUrl: 'lib/views/layouts/default.html',
      },
      'header@app': {
        templateUrl: 'lib/views/components/header.html'
      },
      'footer@app': {
        templateUrl: 'lib/views/components/footer.html'
      },
    },
    data: {
      title: 'Customer management'
    }
  },
  'app.home': {
    url: '/',
    views: {
      'main@app': {
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
      }
    }
  },
  'app.customer': {
    url: '/customer',
    views: {
      'main@app': {
        controller: 'CustomerController',
        controllerAs: 'customerCtrl',
        templateUrl: 'lib/views/pages/customer.html'
      }
    },
    data: {
      title: 'Customers'
    }
  },
  'app.customer.create': {
    url: '/create',
    controller: 'CustomerCreateController',
    controllerAs: 'createCtrl',
    templateUrl: 'lib/views/modals/customer.create.html',
    data: {
      title: 'Customer create'
    }
  },
  'app.customer.edit': {
    url: '/edit/:id',
    controller: 'CustomerEditController',
    templateUrl: 'lib/views/modals/customer.edit.html',
    data: {
      title: 'Customer details'
    }
  },
  'app.customer.list': {
    url: '/list',
    controller: 'CustomerListController',
    controllerAs: 'listCtrl',
    templateUrl: 'lib/views/pages/customer.list.html',
    data: {
      title: 'Customers overview'
    }
  },
  'app.customer.navi': {
    url: '/analytics/:id',
    controller: 'CustomerNaviController',
    controllerAs: 'naviCtrl',
    templateUrl: 'lib/views/pages/customer.navi.html',
    data: {
      title: 'Customer analytics'
    }
  },
};

export default ['$stateProvider', '$locationProvider', '$urlRouterProvider',
  function config($stateProvider, $locationProvider, $urlRouterProvider) {
    let stateNames = Object.keys(states);
    angular.forEach(stateNames, function(stateName) {
      $stateProvider.state(stateName, states[stateName]);
    });

    /* Enable HTML5 mode */
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: '/'
    });

    /* Define application level redirects*/
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.when('/customer', '/customer/list');

    $urlRouterProvider.otherwise(function(){
      //@todo: create a 404
      console.log('Page not found');
      console.log(arguments);
    });
}];