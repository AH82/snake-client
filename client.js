const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP, // dont forget to change this depending on the "server"
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // Handling Data (Computer B)
conn.on('data', data => {
  console.log('server says: ', data);
});
//Client Can Send a Reply (Computer B)

conn.on('connect', () => {
  console.log('Successfully connected to game server')
  conn.write('Name: HAT', );
  // console.log('Moving up');
  // conn.write('Move: up');
  // setInterval( () => {conn.write('Move: up')}, 1000);
});

  //main function's return
  return conn;
}

module.exports = {connect};