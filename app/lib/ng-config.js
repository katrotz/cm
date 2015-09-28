'use strict';

import appLayoutTpl from './views/layouts/default.html!text';
import appHeaderTpl from './views/components/header.html!text';
import appFooterTpl from './views/components/footer.html!text';
import appCustomerTpl from './views/pages/customer.html!text';
import appCustomerEditTpl from './views/pages/customer.edit.html!text';
import appCustomerListTpl from './views/pages/customer.list.html!text';
import appCustomerNaviTpl from './views/pages/customer.navi.html!text';


export var states = {
  app: {
    url: '',
    abstract: false,
    views: {
      layout: {
        template: appLayoutTpl,
      },
      'header@app': {
        template: appHeaderTpl
      },
      'footer@app': {
        template: appFooterTpl
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
        template: appCustomerTpl
      }
    },
    data: {
      title: 'Customers'
    }
  },
  'app.customer.edit': {
    url: '/{id:int}/edit',
    controller: 'CustomerEditController',
    controllerAs: 'editCtrl',
    template: appCustomerEditTpl,
    data: {
      title: 'Customer details'
    }
  },
  'app.customer.list': {
    url: '/list',
    controller: 'CustomerListController',
    controllerAs: 'listCtrl',
    template: appCustomerListTpl,
    data: {
      title: 'Customers overview'
    }
  },
  'app.customer.navi': {
    url: '/{id:int}/analytics',
    controller: 'CustomerNaviController',
    controllerAs: 'naviCtrl',
    template: appCustomerNaviTpl,
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