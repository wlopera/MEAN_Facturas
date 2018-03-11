var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var facturaShema = new Schema({
  nombre: {
    type: String
  },
  codigo: {
    type: String
  },
  monto: {
    type: Number
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

// CReamos un esquema y se la asignamos a nuestro modelo
var Factura = mongoose.model('Factura', facturaShema);

// Poner el modelo disponible a la aplicacion
module.exports = Factura;
