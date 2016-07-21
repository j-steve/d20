#!/usr/bin/env node

// Load module dependencies.
var http = require('http');
var debug = require('debug')('D20:server');
var app = require('../app');

// Get port from environment and store in Express.
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Create HTTP server and listen on provided port, on all network interfaces.
var server = http.createServer(app);
server.listen(port);

/**
 * Event listener for HTTP server "listening" event.
 */
server.on('listening', function() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  
  debug('Listening on ' + bind);
  var hostname = process.env.C9_HOSTNAME || require("os").hostname();
  console.log(`Server is running at http://${hostname}:${addr.port}`);
});

/**
 * Event listener for HTTP server "error" event.
 */
server.on('error', function(error) {
  if (error.syscall !== 'listen') {throw error;}

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

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
});

/**
 * Normalizes a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {  // named pipe
    return val; 
  } else if (port >= 0) { // port number
    return port;  
  } else { 
    return false;
  }
}
