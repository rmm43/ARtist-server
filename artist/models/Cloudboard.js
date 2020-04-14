"use strict"

const Sequelize = require("sequelize");
const db = require("../db");

const Board = db.define("Cloudboard",
        {
                board_id: {
                        type: Sequelize.INTEGER(11),
                        primaryKey: true,
                        autoIncrement: true
                },
                board_hash: {
                        type: Sequelize.STRING(500)
                },
                geo_location: {
                        type: Sequelize.STRING(500)
                },
		is_public: {
			type: Sequelize.TINYINT
		},
		user_id: {
			type: Sequelize.INTEGER(11)
		}
        },
        {
                freezeTableName: true,
                timestamps: false
        }
);

Board.sync().then(() => {
        console.log("Board table --- READY");
});

module.exports = Board;

