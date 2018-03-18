const level = require('level');

module.exports = function (databaseDir, key, callback) {
  var db = level(databaseDir);
  db.get(key, callback);
}
