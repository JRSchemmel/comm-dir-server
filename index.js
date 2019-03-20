//App for Lake Quivira Community Directory
var express = require('express');
var routes = require('./router');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '/assets/images')));
var mongoose = require('./mongoose_basics/node_modules/mongoose');
mongoose.connect('mongodb://localhost:5000/lqdb1', {useNewUrlParser: true}, function (error) {
  if (error) throw error;
  console.log('Successfully connected to mongoose database');
});

//Routes
app.use(require('./router'));  //http://localhost:5000 (...)

var server = app.listen(5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

});

module.exports = app;