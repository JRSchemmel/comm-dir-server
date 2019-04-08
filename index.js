//App for Lake Quivira Community Directory
var express = require('express');

var bodyParser = require('body-parser');
var routes = require('./routes/routes');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '/assets/images')));

//app.listen(5000, () => {
// console.log('Running on port 5000');
//});

//var server = app.listen(5000, function () {
//  var host = server.address().address
//  var port = server.address().port

//console.log("App listening at http://%s:%s", host, port)

//mongoose.connect('mongodb://localhost:5000/lqdb1', {useNewUrlParser: true}, function(err) {
//  if (err) throw err;
//  console.log('Successfully connected to mongoose database');
//});

//mongoose.Promise = require('./mongoose_basics/node_modules/bluebird');
//var mongoose = require('./mongoose_basics/node_modules/mongoose');
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:5000/data/lqdb1', { useNewUrlParser: true,
//  promiseLibrary: require('./mongoose_basics/node_modules/bluebird/js/release/bluebird') })
//  .then(() =>  console.log('mongoose connection succesful'))
//  .catch((err) => console.error(err));

var MongoClient = require('./mongoose_basics/node_modules/mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:5000';
var dbName = 'lqdb1'; { useNewUrlParser: true };
var client = new MongoClient(url);
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  var db = client.db(dbName);

  client.close();
});

  app.listen(5000, () => {
    console.log('Running on port 5000');
  });

//Routes
//app.use(require('./routes/routes'));  //http://localhost:5000 (...)
//app.use(bodyParser.json());
//routes(app);

//app.use((err, req, res, next) => {
//  res.status(422).send({ error: err.message });
//
// console.log("App listening at http://%s:%s", host, port)
//
//});

module.exports = app;