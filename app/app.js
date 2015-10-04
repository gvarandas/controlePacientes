'use strict';

/**
 * @ngdoc overview
 * @name controlePacientesApp
 * @description
 * # controlePacientesApp
 *
 * Main module of the application.
 */
angular
  .module('controlePacientesApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/components/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
