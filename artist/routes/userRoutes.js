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
userRouter.route("/create").post(async (req, res) => { 
	User.create({
		user_id: escape(req.body.user_id), username: escape(req.body.username), email: escape(req.body.email)
	}).then(user => {
		return res.status(200);
	});
});


//Helper Functions
async function getAllUsers() {
	const users = await User.findAll();
	return users;
}

module.exports = {userRouter};
