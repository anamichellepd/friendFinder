var path = require("path");
var express = require("express");
var app = express();
module.exports = function(app) {
  //route to survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });
  //default route home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
};
