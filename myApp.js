var express = require('express');
var app = express();
console.log("Hello World")



app.get("/", function(req, res){
  res.sendFile(__dirname+ '/views/index.html');
  app.use(express.static(__dirname + "/public"));
})
if (process.env.VAR_NAME === "allCaps") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }

module.exports = app;



































 module.exports = app;
