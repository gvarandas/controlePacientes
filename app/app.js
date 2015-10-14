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
    
    'agenda',
    'cadastro',

    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngMaterial'
  ])

  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '/components/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/agenda', {
        templateUrl: '/components/agenda/agenda.html',
        controller: 'AgendaController',
        controllerAs: 'AgendaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
