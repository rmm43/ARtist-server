"use strict"

const Board = require("../models/Cloudboard");
const express = require("express");
const boardRouter = express.Router();
boardRouter.use(express.json());
const Sequelize = require("sequelize");

//Get Routes
boardRouter.route("/").get(async (req,res) => {
        res.json(await getAllBoard());
});


//Post Routes



//Helper Functions
async function getAllBoard() {
        const boards = await Board.findAll();
        return boards;
}

module.exports = {boardRouter};

