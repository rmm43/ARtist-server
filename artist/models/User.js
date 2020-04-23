"use strict"

const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("User",
	{
		user_id: {
			type: Sequelize.STRING(100),
			primaryKey: true,
			autoIncrement: false
		},
		username: {
			type: Sequelize.STRING(100)
		},
		email: {
			type: Sequelize.STRING(500)
		}
	},
	{
		freezeTableName: true,
		timestamps: false
	}
);

User.sync().then(() => {
	console.log("User table --- READY");
});

module.exports = User;
