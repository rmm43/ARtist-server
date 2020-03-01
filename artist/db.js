"use strict"

const Sequelize = require("sequelize");
const password = "capstone2020";

const db = new Sequelize("ARtist", "ARtist", "capstone2020", {
	host: "artistcapstone.cjf7mruwjrdf.us-east-2.rds.amazonaws.com",
	dialect: "mysql",
	post: 4848
});

db
	.authenticate()
	.then(() => {
		console.log("Successfully connected to database.");
	})
	.catch(err => {
		console.log("Connection to database unsuccessful..");
	});

module.exports = database;
