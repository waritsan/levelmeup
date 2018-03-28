const level = require('level');

module.exports = function (databaseDir, date, callback) {
  var tweets = [];
  var error;
  const db = level(databaseDir);

  db.createReadStream({ gte: date, lte: date + '\xff' })
    .on('data', function (data) {
      tweets.push(data.value);
    })
    .on('error', function (err) {
      error = err;
    })
    .on('end', function () {
      db.close(function (err) {
        callback(error || err, tweets);
      });
    });
}
