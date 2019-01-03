const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const router = require("./routes");
const app = express();
const port = 8080;

var readFileData = require("./lib/read_data");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.set("view engine", "ejs");

router(app);

mongoose
	.connect("mongodb://localhost/shivom", {
		useNewUrlParser: true
	})
	.then(() => {
		console.log("mongoose successfully connected");
	});

module.exports = app;
