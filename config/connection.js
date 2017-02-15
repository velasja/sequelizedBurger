var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
	console.log(this, "I'm working");
} else {
	connection = mysql.createConnection({
		host: "localhost",
		port: 8889,
		user: "root",
		password: "root",
		database: "burgers_db"
	});
};

connection.connect();

module.exports = connection;