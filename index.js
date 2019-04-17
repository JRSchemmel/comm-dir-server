//App for Lake Quivira Community Directory
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const router = require('./routes/router');
const connect = require('connect');
const serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(27017, function(){
    console.log('Server running on 27017 for MongoDB...');});
const mongoose = require('./mongoose_basics/node_modules/mongoose');
mongoose.Promise = global.Promise;
mongoose.Promise = require('./mongoose_basics/node_modules/bluebird');
const dbPath = 'mongodb://localhost:27017/lgdb1';
mongoose.connect(dbPath, { useNewUrlParser: true })
  .then(response => console.log('Mongoose connected'))
  .catch(err => console.error('mongoose.connect', err));

module.exports = app;