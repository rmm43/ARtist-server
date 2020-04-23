"use strict"

const Friend = require("../models/Friend_Relationship");
const express = require("express");
const friendRouter = express.Router();
friendRouter.use(express.json());
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//Get Routes
friendRouter.route("/:id").get(async (req,res) => {
        res.json(await getFriends(req.params.id));
});


//Post Routes



//Helper Functions
async function getFriends(id) {
        const friends = await Friend.findAll({where: {user_id: {[Op.eq]: id}}});
        return friends;
}

module.exports = {friendRouter};

