angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newFactura = {};
	$scope.facturas = {};
	$scope.selected = false;

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

	// Función para editar los datos de una factura
	$scope.modificarFactura = function() {
		$http.put('/api/factura/' + $scope.newFactura._id, $scope.newFactura)
		.success(function(data) {
				$scope.newFactura = {}; // Borramos los datos del formulario
				$scope.facturas = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error-modificarFactura [PUT: /api/factura]: ' + data);
		});
	};

	// Función que borra un objeto factura conocido su id
	$scope.borrarFactura = function() {
		$http.delete('/api/factura/' + $scope.newFactura._id)
		.success(function(data) {
			$scope.newFactura = {};
			$scope.facturas = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error-borrarFactura [DELETE: /api/factura]: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectFactura = function(factura) {
		$scope.newFactura = factura;
		$scope.selected = true;
	};

	// Función para limpiar la tabla de valores a modificar
	$scope.limpiar = function() {
		$scope.newFactura = {};
		$scope.selected = false;
	};
}
