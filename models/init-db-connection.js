const mysql = require('mysql');

const { connectionConfig } = require('../config/config');

const connectionPool = mysql.createPool(connectionConfig);

connectionPool.on('acquire', (connection) => {
  console.log('Connection %d acquired', connection.threadId);
});

connectionPool.on('connection', (connection) => {
  connection.query('SET SESSION auto_increment_increment=1');
});

connectionPool.on('enqueue', () => {
  console.log('Waiting for available connection slot');
});

connectionPool.on('release', (connection) => {
  console.log('Connection %d released', connection.threadId);
});

connectionPool.on('error', (err) => {
  console.log('MySQL error ===>', err);
});

const getConnectionStatus = () => {
  // eslint-disable-next-line no-underscore-dangle
  console.log('All Connections ===>> ', connectionPool._allConnections.length); // number of connections currently created, including ones in use

  // eslint-disable-next-line no-underscore-dangle
  console.log('Free Connections ===>> ', connectionPool._freeConnections.length); // number of free connections awaiting use

  // eslint-disable-next-line no-underscore-dangle
  console.log('Acquired Connections ===>> ', connectionPool._acquiringConnections.length); // number of connections in the process of being acquired
};

getConnectionStatus();
module.exports = connectionPool;
