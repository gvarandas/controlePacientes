'use strict';

/**
 * @ngdoc function
 * @name controlePacientesApp.controller:AgendaController
 * @description
 * # AgendaController
 * Controller of the controlePacientesApp
 */
angular.module('agenda', [])
  .controller('AgendaController', AgendaController);
  
  function AgendaController($scope) {
    var vm = this;

    vm.pacientes = [
		{
			dpp: "Thursday, July 17, 2014 11:34 AM",
			dum: "Friday, June 6, 2014 1:45 PM",
			preNatal: "Wednesday, February 12, 2014 6:25 AM",
			address: "815 Hendrix Street, Hollymead, Montana, 4500",
			phone: "+1 (976) 514-2556",
			nome: "Carmen William",
			status: "Agendado"
		},
		{
			dpp: "Sunday, June 28, 2015 1:11 PM",
			dum: "Tuesday, July 7, 2015 5:18 PM",
			preNatal: "Monday, November 10, 2014 4:31 PM",
			address: "821 Quentin Road, Lithium, Iowa, 2013",
			phone: "+1 (984) 566-2186",
			nome: "Alisha Savage",
			status: "Agendado"
		},
		{
			dpp: "Saturday, May 24, 2014 2:03 AM",
			dum: "Tuesday, July 21, 2015 1:56 PM",
			preNatal: "Tuesday, June 17, 2014 9:01 AM",
			address: "624 Glendale Court, Wescosville, Rhode Island, 7064",
			phone: "+1 (990) 560-3486",
			nome: "Lourdes Chan",
			status: "Agendado"
		},
		{
			dpp: "Thursday, February 27, 2014 5:11 PM",
			dum: "Monday, April 27, 2015 9:33 PM",
			preNatal: "Friday, July 11, 2014 2:26 PM",
			address: "553 Bayard Street, Wilsonia, California, 8045",
			phone: "+1 (814) 508-2982",
			nome: "Gilmore Page",
			status: "Parto"
		},
		{
			dpp: "Tuesday, March 17, 2015 6:56 PM",
			dum: "Sunday, March 22, 2015 6:44 AM",
			preNatal: "Monday, March 2, 2015 10:59 AM",
			address: "417 Micieli Place, Kenmar, North Dakota, 2591",
			phone: "+1 (822) 512-3059",
			nome: "Cindy Burgess",
			status: "Acompanhamento"
		}
	];

	vm.pacienteForm = {
		nome: null,
		preNatal: null,
		dum: null,
		dpp: null,
		status: null
	};

	vm.showFormPaciente = false;

	vm.cadastrarPaciente = cadastrarPaciente;
	vm.toggleFormPaciente = toggleFormPaciente;

	function cadastrarPaciente(){
		vm.pacienteForm.status = 'Agendado';
		vm.pacientes.push(vm.pacienteForm);
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
