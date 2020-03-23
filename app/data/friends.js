var PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(3000);

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});
