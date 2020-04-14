"use strict"

const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("User",
	{
		user_id: {
			type: Sequelize.INTEGER(11),
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: Sequelize.STRING(100)
		},
		pass_hash: {
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
