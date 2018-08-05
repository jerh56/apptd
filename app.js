var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
// Define routes files
var index_routes = require('./routes/index');
 
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

// Configurar los archivos de rutas
app.use('/', index_routes);

//app.listen(process.env.PORT || 8080);
module.exports = app;