let connection;
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
}
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  //
  stdin.on('data', (key) => {
    // if (key === 'w') { setInterval( () => {conn.write('Move: up')}, 750);    }
    // if (key === 's') { setInterval( () => {conn.write('Move: down')}, 750);    }
    // if (key === 'a') { setInterval( () => {conn.write('Move: left')}, 750);    }
    // if (key === 'd') { setInterval( () => {conn.write('Move: right')}, 750);    }

    // if (key === 'w') { conn.write('Move: up')};
    // if (key === 's') { conn.write('Move: down')};
    // if (key === 'a') { conn.write('Move: left')};
    // if (key === 'd') { conn.write('Move: right')};

    switch (key) {
      case 'w' : conn.write("Move: up");
      case 's' : conn.write("Move: down");
      case 'a' : conn.write("Move: left");
      case 'd' : conn.write("Move: right");
    }
  })
  //
  stdin.resume();
  return stdin;
}
module.exports = { setupInput };