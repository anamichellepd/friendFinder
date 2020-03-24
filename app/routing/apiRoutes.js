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
// route to friends and JSON all possible friends
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

//post the incoming survey results
app.post("/api/friends", function(req, res) {
  var newFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend.routeName = newFriend.name;

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});
