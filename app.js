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

app.get("/", (req, res) => {
	const q = "SELECT COUNT(*) AS cnt FROM users";

	connection.query(q, (err, rows) => {
		if (err) {
			console.log(err);
		}
		console.log(rows);
		res.json({ count: rows[0].cnt });
	});
	// res.json({ result });
});

// connection.query(
// 	"CREATE TABLE random(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255))",
// 	(err, rows) => {
// 		if (err) {
// 			throw err;
// 		} else {
// 			console.log("data got back");
// 			console.log(rows);
// 		}
// 	},
// );

// const q = "INSERT INTO users (email) VALUES ? ";
// const persons = [];

// for (let i = 0; i < 500; i++) {
// 	persons.push([faker.internet.email()]);
// }

// connection.query(q, [persons], (err, rows) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(rows);
// });

// connection.query("SELECT * FROM users", (err, rows) => {
// 	if (err) {
// 		throw err;
// 	}

// 	for (let i = 0; i < rows.length; i++) {
// 		console.log(rows[i].email);
// 	}
// });

app.listen(PORT, () => {
	console.log(PORT + " is running");
});
