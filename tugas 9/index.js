// Page 1 - 15

// var express = require("express");

// var app = express();

// app.get("/", function (req, res) {
//   res.send(`HelloWorld!`);
// });

// app.use(express.static("public"));

// // Specified Port

// app.listen(3000);

var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("HelloWorld!");
});

app.post("/", function (req, res) {
  res.send("Ini POST Request!");
});

app.put("/user", function (req, res) {
  res.send("PUT Request Dijalankan!");
});

app.delete("/user", function (req, res) {
  res.send("DELETE Request Pada Suatu User!");
});

app.use(express.static("public"));

// Specified Port

app.listen(3000);