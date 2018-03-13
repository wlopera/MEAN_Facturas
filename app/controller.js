var Factura = require('./modelo/factura');

// Obtiene todos los objetos Factura de la base de datos
exports.getFactura = function(req, res) {
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
  Factura.create({
      nombre: req.body.nombre,
      codigo: req.body.codigo,
      monto: req.body.monto,
      fecha: req.body.fecha
    },
    function(err, factura) {
      if (err)
        res.send(err);
      // Obtiene y devuelve todas las facturas tras crear una de ellas
      Factura.find(function(err, factura) {
        if (err)
          res.send(err)
        console.log("Facturas: ", factura);
        res.json(factura);
      });
    });
	}

  // Modificamos un objeto Factura de la base de datos
  exports.updateFactura = function(req, res) {
		// Actualizo el objeto Factura
    Factura.update({
        _id: req.params.factura_id
      }, {
        $set: {
          nombre: req.body.nombre,
          codigo: req.body.codigo,
          monto: req.body.monto,
          fecha: req.body.fecha
        }
      },
      function(err, factura) {
        if (err)
          res.send(err);
        // Obtiene y devuelve todas las facturas tras crear una de ellas
        Factura.find(function(err, factura) {
          if (err)
            res.send(err)
          res.json(factura);
        });
      });
  }

  // Elimino un objeto Factura de la base de Datos
  exports.removeFactura = function(req, res) {
		// Borro el objeto Factura
    Factura.remove({
      _id: req.params.factura_id
    }, function(err, factura) {
      if (err)
        res.send(err);
      // Obtiene y devuelve todas las factura tras borrar una de ellas
      Factura.find(function(err, factura) {
        if (err)
          res.send(err)
        res.json(factura);
      });
    });
  }
