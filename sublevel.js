const level = require('level');
const sub = require('level-sublevel');

module.exports = function (databaseDir, callback) {
  var db = sub(level(databaseDir));
  var error;
  var robots = db.sublevel('robots');
  var dinosaurs = db.sublevel('dinosaurs');
  robots.put('slogan', 'beep boop');
  dinosaurs.put('slogan', 'rawr');
  db.on('error', function (err) {
    error = err;
  });
  db.close(function (err) {
    callback(error || err);
  });
}
