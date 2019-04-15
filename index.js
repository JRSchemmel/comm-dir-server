//App for Lake Quivira Community Directory
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const router = require('./routes/router');
//const path = require('path');
//console.log ('path from index file:', require('path'));
//app.use(express.static(path.join(__dirname, '/assets/images')));

//app.listen(5000, () => {
//  console.log('Running on port 5000');
//});

const connect = require('connect');
const serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(5000, function(){
    console.log('Server running on 5000...');
    console.log ('__dirname: ', __dirname);
});

//const server = app.listen(5000, function () {
//  const host = server.address().address;
//  const port = server.address().port;
//  console.log('App listening at http://%s:%s', host, port)});

//mongoose.Promise = require('./mongoose_basics/node_modules/bluebird');
const mongoose = require('./mongoose_basics/node_modules/mongoose');
// mongoose.Promise = global.Promise;

//mongoose.Promise = require('./mongoose_basics/node_modules/bluebird')
//  .then(() =>  console.log('mongoose promise succesful'))
//  .catch((err) => console.error(err));
console.log('I got this far in index.js');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:5000/lqdb1', {useNewUrlParser: true}, function(err) {
//   if (err) throw err
//   console.log('mongoose.connect:', 'Successfully connected to mongoose database')}
// );

const dbPath = 'mongodb://localhost:27017/lgdb1';
mongoose.Promise = global.Promise;
mongoose.connect(dbPath, { useNewUrlParser: true })
  .then(response => console.log('Mongoose connected'))
  .catch(err => console.error('mongoose.connect', err));

//mongoose.connect('mongodb://localhost:5000/data/lqdb1', { useNewUrlParser: true,
//  promiseLibrary: require('./mongoose_basics/node_modules/bluebird/js/release/bluebird') })
//  .then(() =>  console.log('mongoose connection succesful'))
//  .catch((err) => console.error(err));

//var MongoClient = require('./mongoose_basics/node_modules/mongodb').MongoClient;
//var assert = require('assert');
//var url = 'mongodb://localhost:5000';
//var dbName = 'lqdb1'; { useNewUrlParser: true };
//var client = new MongoClient(url);
//client.connect(function(err) {
//  assert.equal(null, err);
//  console.log("Connected successfully to server");

//  var db = client.db(dbName);

//  client.close();
//});

//  app.listen(5000, () => {
//    console.log('Running on port 5000');
//  });

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