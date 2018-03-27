const level = require('level');

module.exports = function (databaseDir, date, callback) {
  var tweetCount = 0;
  var error;
  const db = level(databaseDir);
  db.createReadStream({ gte: date})
    .on('data', function (data) {
      tweetCount++;
    })
    .on('error', function (err) {
      error = err;
    })
    .on('end', function () {
      db.close(function (err) {
        callback(error || err, tweetCount);
      });
    });
}
