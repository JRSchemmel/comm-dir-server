//App for Lake Quivira Community Directory
var express = require('express');
var routes = require('./router');
var app = express();
//var app = require('index');
//app.use(express.static('public'));
var path = require('path');
app.use(express.static(path.join(__dirname, '/assets/images')));

//Routes
app.use(require('./router'));  //http://localhost:5000 (...)

var server = app.listen(5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

});

//app.listen(5000, function() {
//  console.log('server is running');
//});

module.exports = app;