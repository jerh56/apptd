var app = require('../app');
//var router = require('../routes/router');


//var debug = require('debug')('imaginadores:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
//app.set('port', port);
console.log('listening on port: ',port);
/**
 * Create HTTP server.
 */

//var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */



//  var app = require('express')();
// var http = require('http').Server(app);

//var io = require('socket.io')(server);
//var io = app.io;

//var io = require('socket.io')();
//io.attach(server);

//var socket_routes = require('../routes/socketio.js')(io); // Se agrega modulo donde se encuentran las rutas para sockets

// IO






//server.listen(port);
app.listen(port);
app.on('error', onError);
app.on('listening', onListening);


// function reservePackage(packageid, userid,cb){
//   OrderPacks.

// }


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

