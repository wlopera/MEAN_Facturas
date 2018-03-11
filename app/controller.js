var Persona = require('./modelo/persona');
var Factura = require('./modelo/factura');

// Obtiene todos los objetos Persona de la base de datos
exports.getPersona = function (req, res){
	Persona.find(
		function(err, persona) {
			if (err)
				res.send(err)
					res.json(persona); // devuelve todas las Personas en JSON
				}
			);
}

// Guarda un objeto Persona en base de datos
exports.setPersona = function(req, res) {

		// Creo el objeto Persona
		Persona.create(
			{nombre : req.body.nombre,apellido: req.body.apellido, edad: req.body.edad},
			function(err, persona) {
				if (err)
					res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
			});

	}

// Modificamos un objeto Persona de la base de datos
exports.updatePersona = function(req, res){
	Persona.update( {_id : req.params.persona_id},
					{$set:{nombre : req.body.nombre,apellido: req.body.apellido, edad: req.body.edad}},
					function(err, persona) {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
			});
	}

// Elimino un objeto Persona de la base de Datos
exports.removePersona = function(req, res) {
	Persona.remove({_id : req.params.persona_id}, function(err, persona) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las personas tras borrar una de ellas
			Persona.find(function(err, persona) {
				if (err)
					res.send(err)
				res.json(persona);
			});
		});
}

// Obtiene todos los objetos Factura de la base de datos
exports.getFactura = function (req, res){
	Factura.find(
		function(err, factura) {
			if (err)
				res.send(err)
					res.json(factura); // devuelve todas las Facturas en JSON
				}
			);
}

// Guarda un objeto Factura en base de datos
exports.setFactura = function(req, res) {

		// Creo el objeto Factura
		Factura.create(
			{nombre : req.body.nombre,codigo: req.body.codigo, monto: req.body.monto, fecha: req.body.fecha},
			function(err, factura) {
				if (err)
					res.send(err);
				// Obtine y devuelve todas las facturas tras crear una de ellas
				Factura.find(function(err, factura) {
				 	if (err)
				 		res.send(err)
					console.log("Facturas: ", factura);
				 	res.json(factura);
				});
			});

	}
