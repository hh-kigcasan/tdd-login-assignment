const Mysql                 = require('mysql');

class UserModel {
	executeQuery(query) {
		return new Promise((resolve, reject) => {
			connection.query(query, function (err, result) {
				if(err) {
					reject(err);
				}else{
		        	resolve(result);
		        }
		    });
		});		
	}
}

module.exports = UserModel;