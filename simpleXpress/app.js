var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//create a route
app.get('/', function(req, res) {
  console.log("hello world");  
  res.send('hello world');

});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});