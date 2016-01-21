var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.db;
ds.automigrate('user', function(err) {
  if (err) throw err;
});

ds.automigrate('ACL', function(err) {
  if (err) throw err;
});

ds.automigrate('AccessToken', function(err) {
  if (err) throw err;
});
