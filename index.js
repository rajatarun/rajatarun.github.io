var express = require('express');
var app = express();
var mongoose        = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var db = require('./config/db');
mongoose.connect(db.url); 
app.use(express.static(__dirname)); 
var port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
require('./app/routes')(app); // configure our routes

app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);
exports = module.exports = app;      