exports.findById = function(connection, id, cb) {
  process.nextTick(function() {
    connection.query('SELECT * FROM users WHERE id = "'+id+'"', function(err, rows, fields) {
      console.log(err + "asdasd   ->   " + rows[0]);
      cb(null, rows[0]);
    });
  });
}

exports.findByUsername = function(connection, username, cb) {
  process.nextTick(function() {
    connection.query('SELECT * FROM users WHERE username = "'+username+'"', function(err, rows, fields) {
      console.log(err + "   ->   " + rows[0].id + rows[0].name + rows[0].password);
      cb(null, rows[0]);
    });
  });
}
