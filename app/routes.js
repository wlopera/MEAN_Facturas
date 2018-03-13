var Factura = require('./modelo/factura');
var Controller = require('./controller');

// Endpoints del aplicativo
module.exports = function(app) {
  // devolver todas las facturas
  app.get('/api/factura', Controller.getFactura);

  // Crear una nueva Factura
  app.post('/api/factura', Controller.setFactura);

  // Modificar los datos de una Factura
  app.put('/api/factura/:factura_id', Controller.updateFactura);

  // Borrar una Factura
  app.delete('/api/factura/:factura_id', Controller.removeFactura);

  // Aplicacion
  app.get('*', function(req, res) {
    res.sendfile('./angular/index.html'); // Carga única de la vista
  });

};
