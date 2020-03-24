// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route to send to /survey
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});
//Default route to home
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
