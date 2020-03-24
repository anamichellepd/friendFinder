var friendsData = require("../data/friends.js");
var express = require("express");
var app = express();

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
};

//post route for user to input information in the survey
app.post("/api/survey", function(req, res) {
  friendsData.push(req.body);
  res.json(true);
});
