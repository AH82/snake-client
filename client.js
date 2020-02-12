const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103', // dont forget to change this depending on the "server"
    port: 50541
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
});

// conn.on('data', (data) => {
//   conn.write('Name: HAT');
// });

  //main function's return
  return conn;
}

module.exports = {connect};