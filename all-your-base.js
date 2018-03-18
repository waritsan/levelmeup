module.exports = function (x, y, callback) {
  var result = 'ALL YOUR ' + x + ' ARE BELONG TO ' + y;
  var error = null;
  callback(error, result);
}
