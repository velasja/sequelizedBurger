var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "us-cdbr-iron-east-04.cleardb.net",
		port: 8889,
		user: "b4bcde2e179a2a",
		password: "03538694",
		database: "heroku_d17878de573443a"
	});
};

connection.connect();

module.exports = connection;