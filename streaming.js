const level = require('level');
const through2 = require('through2');

module.exports = function (databaseDir) {
  const db = level(databaseDir);
  var error;
  db.on('error', function (err) {
    error = err;
  });
  return db.createReadStream()
    .pipe(through2({objectMode: true}, function (data, _, next) {
      this.push(data.key + '=' + data.value)
      next();
    }, function (next) {
      db.close(next);
    }));
}
