exports.users = require('./users');
exports.getForms = function(id, connection, cb) {
	connection.query('SELECT id FROM forms WHERE owner_id = "'+id+'"', function(err, rows, fields) {
      console.log(err + "asdasd   ->   " + rows);
      cb(rows);
    });
}

exports.addPayment = function(form_id, transaction_id, transaction_amount, data, connection, cb) {
	connection.query('INSERT INTO `razorforms`.`payments` (`form_id`, `transaction_id`, `transaction_amount`, `data`) VALUES (\''+form_id+'\', \''+transaction_id+'\', \''+transaction_amount+'\',\''+data+'\');', function(err, result) {
	    if (err) {
	    	cb(err);
	        return;
	    }
	    else {
	    	cb();
	    }
	});
}

exports.getFormStructre = function(id, connection, cb) {
	connection.query('SELECT structure FROM forms WHERE id = "'+id+'"', function(err, rows, fields) {
		console.log(err);
		if(!rows) {
			cb(null);
		}
        cb(rows);
    });
}

exports.userDoesntExist = function(username, connection, cb) {
	connection.query('SELECT id FROM users WHERE username = "'+username+'"', function(err, rows, fields) {
		if(!rows) {
			cb(true);
		}
        cb(false);
    })
};

exports.addUser = function(username, name, password, connection, cb) {
	connection.query('INSERT INTO `razorforms`.`users` (`username`, `name`, `password`) VALUES (\''+username+'\', \''+name+'\', \''+password+'\');', function(err, result) {
	    if (err) {
	    	cb(err);
	        return;
	    }
	    else {
	    	cb();
	    }
	});
}