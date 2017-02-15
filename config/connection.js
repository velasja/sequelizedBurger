var mysql = require("mysql");
var connection;
var port = process.env.PORT | 3000;

connection = mysql.createConnection({
	host: "us-cdbr-iron-east-04.cleardb.net",
	user: "b4bcde2e179a2a",
	password: "03538694",
	database: "heroku_d17878de573443a"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;