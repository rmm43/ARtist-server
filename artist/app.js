"use strict";

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const userRouter = require("./routes/userRoutes").userRouter;
const boardRouter = require("./routes/boardRoutes").boardRouter;
const friendRouter = require("./routes/friendRoutes").friendRouter;

app.use("/users", userRouter);
app.use('/boards', boardRouter);
app.use('/friends', friendRouter);

app.listen(4848, () => console.log("Startup Complete"));

module.exports = app;
