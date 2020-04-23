"use strict"

const Sequelize = require("sequelize");
const db = require("../db");

const Friend = db.define("Friend_Relationship",
        {
                user_id: {
                        type: Sequelize.STRING(100),
                        primaryKey: true,
                        autoIncrement: false
                },
                friend_id: {
                        type: Sequelize.STRING(100),
			primaryKey: true,
			autoIncrement: false

                },
                is_pending: {
                        type: Sequelize.TINYINT
                }
        },
        {
                freezeTableName: true,
                timestamps: false
        }
);

Friend.sync().then(() => {
        console.log("Friend table --- READY");
});

module.exports = Friend;

