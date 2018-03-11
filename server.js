var express  = require('express');
var app      = express();                     // Utilizamos express
var mongoose = require('mongoose');                 // mongoose para mongodb
var path = require('path');
var http = require('http');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Configuracion
mongoose.connect('mongodb://localhost:27017/test');     // Hacemos la conexión a la base de datos de Mongo con nombre "test"

    app.use(express.static(path.join(__dirname, '/angular')));
    app.use(logger('dev'));            // activamos el log en modo 'dev'
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

// Cargamos los endpoints
require('./app/routes.js')(app);
// Cogemos el puerto para escuchar
if ('development' == app.get('env')) {
	console.log("Enpoints DEV")
}

var server = http.createServer(app);
app.listen(8080, function () {
  console.log('Servidor arriba. Escuchando puerto 8080');
});
