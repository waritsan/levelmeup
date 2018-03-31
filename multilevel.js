const multilevel = require('multilevel');
const net = require('net');

module.exports = function (callback) {
  const db = multilevel.client();
  const connection = net.connect(4545);
  connection.pipe(db.createRpcStream()).pipe(connection);
  db.get('multilevelmeup', function (err, value) {
    connection.end(function () {
      callback(err, value);
    });
  });
}
