var AngularRailsTemplate = angular.module('AngularRailsTemplate', [
  'templates',
  'ngRoute',
  'controllers',
]);

AngularRailsTemplate.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'LandingController'
    });
  }
]);

controllers = angular.module('controllers', []);

controllers.controller('LandingController', ['$scope', function($scope){}]);
