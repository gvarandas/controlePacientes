'use strict';

/**
 * @ngdoc function
 * @name controlePacientesApp.directive:CadastroPaciente
 * @description
 * # CadastroPaciente
 * Directive of the controlePacientesApp
 */
angular.module('cadastro', [])
  .directive('CadastroPaciente', function(){
  	return {
  		templateUrl: '/components/cadastro/cadastroPaciente.html',
  		controller: 'CadastroController',
  		controllerAs: 'CadastroCtrl'
  	};

  	function CadastroController($scope) {
	    var vm = this;

		vm.pacienteForm = {
			nome: null,
			preNatal: null,
			dum: null,
			dpp: null,
			status: null,
			dataConsulta: null
		};

		vm.showFormPaciente = false;

		vm.cadastrarPaciente = cadastrarPaciente;
		vm.toggleFormPaciente = toggleFormPaciente;

		function cadastrarPaciente(){
			vm.pacienteForm.status = 'Agendado';
			//vm.pacientes.push(vm.pacienteForm);
			vm.pacienteForm = {
				nome: null,
				preNatal: null,
				dum: null,
				dpp: null,
				status: null
			};
		}

		function toggleFormPaciente(){
			vm.showFormPaciente = !vm.showFormPaciente;
		}
  	}

  });
