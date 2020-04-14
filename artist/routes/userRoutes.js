"use strict"

const User = require("../models/User");
const express = require("express");
const userRouter = express.Router();
userRouter.use(express.json());
const Sequelize = require("sequelize");

//Get Routes
userRouter.route("/").get(async (req,res) => {
	res.json(await getAllUsers());
});


//Post Routes



//Helper Functions
async function getAllUsers() {
	const users = await User.findAll();
	return users;
}

module.exports = {userRouter};
