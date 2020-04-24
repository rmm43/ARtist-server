"use strict"

const Board = require("../models/Cloudboard");
const express = require("express");
const boardRouter = express.Router();
boardRouter.use(express.json());
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


//Get Routes
boardRouter.route("/").get(async (req,res) => {
        res.json(await getAllBoard());
});

boardRouter.route("/byusername/:username").get(async (req,res) => {
	res.json(await getByUsername(escape(req.params.username)));
});


//Post Routes
//boardRouter.route("/newBoard").post(async (req,res) => {
//	
//	Board.findOne({
//		where: {username: {[Op.eq]: escape(req.body.username)}}
//	}).then(board => {
	//
	//	if(board != null)
	//	{
	//		board.update({
	//			board_hash: req.body.hash
	//		}).then(updatedBoard => {
	//			return res.status(200);
	//		});
	//	}
	//	else
	//	{
	//		Board.create({
      //          	board_id: null, board_hash: req.body.hash, geo_location: null, is_public: null, username: escape(req.body.username)
    //    		}).then(newBoard => {
  //             			 return res.status(200);
//			});
//		}
//	});
//});

boardRouter.route("/newBoard").post(async (req,res) => {
	Board.create({
                        board_id: null, board_hash: req.body.hash, geo_location: null, is_public: null, username: escape(req.body.username)
                        }).then(newBoard => {
                                 return res.status(200).send();
                        });
});


//Helper Functions
async function getAllBoard() {
        const boards = await Board.findAll();
        return boards;
}

//async function getByUsername(username) {
//	const board = await Board.findOne({where: {username: {[Op.eq]: username}}});
//	return board;
//}

async function getByUsername(username) {
	const boards = await Board.findAll({where: {username: {[Op.eq]: username}}});
	return boards;
}

module.exports = {boardRouter};

