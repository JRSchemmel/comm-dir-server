//App for Lake Quivira Community Directory
var express = require('express');
var routes = require('./routes/router');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '/assets/images')));
var mongoose = require('./mongoose_basics/node_modules/mongoose');
//mongoose.connect('mongodb://localhost:5000/lqdb1', {useNewUrlParser: true}, function(err) {
//  if (err) throw err;
//  console.log('Successfully connected to mongoose database');
//});

mongoose.Promise = require('./mongoose_basics/node_modules/bluebird');
mongoose.connect('mongodb://localhost:5000/lqdb1', { useNewUrlParser: true, promiseLibrary: require('./mongoose_basics/node_modules/bluebird') })
  .then(() =>  console.log('mongoose connection succesful'))
  .catch((err) => console.error(err));

//Routes
app.use(require('./routes/router'));  //http://localhost:5000 (...)

var server = app.listen(5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

});

module.exports = app;