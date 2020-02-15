// const net = require('net');
const {connect} = require('./client')
/**
 * Establishes connection with the game server
 */
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
}
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
}


console.log('Connecting ...');
connect();
setupInput();
