const { faker } = require("@faker-js/faker");
const express = require("express");

const PORT = 5000;
const app = express();
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	password: "password",
	user: "root",
	database: "join_us",
	port: 3306,
});

connection.connect((err) => {
	if (err) {
		throw err;
	} else {
		console.log("connected");
	}
});
app.listen(PORT, () => {
	console.log(PORT + " is running");
});
console.log(faker.internet.email());
