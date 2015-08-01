'use strict';

angular.module('myApp.hub', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/hub', {
      templateUrl: 'hub/hub.html',
      controller: 'HubCtrl'
    });
  }])

  .controller('HubCtrl', [function() {

  }]);