angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newPersona = {};
	$scope.personas = {};
	$scope.selected = false;

	$scope.newFactura = {
		nombre: "KFC",
		codigo: "EYSF111091108-00199909",
		monto: 13.50,
		fecha: "10/03/2018"
	};
	$scope.facturas = {};

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/persona').success(function(data) {
		console.log("Consulta BD /api/persona: ", data);
		$scope.personas = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar a una persona
	$scope.registrarPersona = function() {

		$scope.registrarFactura();
		/*
		$http.post('/api/persona', $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario
				$scope.personas = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
		*/
	};

	// Función para editar los datos de una persona
	$scope.modificarPersona = function(newPersona) {
		$http.put('/api/persona/' + $scope.newPersona._id, $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario
				$scope.personas = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto persona conocido su id
	$scope.borrarPersona = function(newPersona) {
		$http.delete('/api/persona/' + $scope.newPersona._id)
		.success(function(data) {
			$scope.newPersona = {};
			$scope.personas = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectPerson = function(persona) {
		$scope.newPersona = persona;
		$scope.selected = true;
		console.log($scope.newPersona, $scope.selected);
	};

	// Obtenemos todos los datos Factura de la base de datos
	$http.get('/api/factura').success(function(data) {
		console.log("Consulta BD /api/factura: ", data);
		$scope.facturas = data;
	})
	.error(function(data) {
		console.log('Error consultando facturas en BD [GET: /api/factura]: ' + data);
	});

	// Función para registrar una factura
	$scope.registrarFactura = function() {
		$http.post('/api/factura', $scope.newFactura)
		.success(function(data) {
				$scope.newFactura = {}; // Borramos los datos del formulario
				$scope.facturas = data;
			})
		.error(function(data) {
			console.log('Error-registrarFactura [POST: /api/factura]: ' + data);
		});
	};
}
