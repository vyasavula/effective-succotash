//jshint esversion:6
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
})); //LIne must for using the body-parser everytime you use it in your project


//GET Methods-Define our routes.
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


//POST Methods
app.post("/", function(req, res) {
  var num1 = Number(req.body.num1); //Body parser will take it as text, hence we are explicitly mentioning as Number.
  var num2 = Number(req.body.num2); //These num1&num2 are the HTML values in the "name" so as to store a value.
  var result = num1 + num2;
  res.send("The result is" + result);
});
//For adding an other page or route called BMI Calculator

//GET-define routes
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmicalc.html");
});

//POST
app.post("/bmicalculator", function(req, res) { //The names should be same as in the html file i.e the action name.
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var n = weight / (height * height);
  res.send("Your BMI is " + n);
});

//Adiing an About me page
app.get("/aboutme", function(req,res){
  res.sendFile(__dirname + "/about.html");
});



//SET Methods- This spins the server.
app.listen(3000, function() {
  console.log("You have just started your server,at local host:3000");
});
