"use strict"

const User = require("../models/User");
const express = require("express");
const userRouter = express.Router();
userRouter.use(express.json());
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


//Get Routes
userRouter.route("/").get(async (req,res) => {
	res.json(await getAllUsers());
});


//Post Routes
userRouter.route("/create").post(async (req, res) => { 
	
	
	var result = await getUserById(req.body.user_id);
	if(result == null)
	{
		console.log("Adding " + req.body.username + " to database.");
		
		User.create({
			user_id: escape(req.body.user_id), username: escape(req.body.username), email: escape(req.body.email)
		}).then(user => {
			return res.status(200).send(user);
		});
	}
	else
	{
		console.log("Not adding to database.");
		return res.status(200);
	}
});


//Helper Functions
async function getAllUsers() {
	const users = await User.findAll();
	return users;
}

async function getUserById(id)
{
	User.findAll({
			where: {user_id: {[Op.eq]: id}}
		}).then(user => {
			return user;
		});
}

module.exports = {userRouter};
