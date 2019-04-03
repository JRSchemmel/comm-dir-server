//App for Lake Quivira Community Directory
var express = require('express');
var mongoose = require('./mongoose_basics/node_modules/mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '/assets/images')));
//mongoose.connect('mongodb://localhost:5000/lqdb1', {useNewUrlParser: true}, function(err) {
//  if (err) throw err;
//  console.log('Successfully connected to mongoose database');
//});
mongoose.Promise = global.Promise;
mongoose.Promise = require('./mongoose_basics/node_modules/bluebird');
mongoose.connect('mongodb://localhost:5000/lqdb1', { useNewUrlParser: true, promiseLibrary: require('./mongoose_basics/node_modules/bluebird') })
  .then(() =>  console.log('mongoose connection succesful'))
  .catch((err) => console.error(err));

//Routes
//app.use(require('./routes/routes'));  //http://localhost:5000 (...)
app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });

//var server = app.listen(5000, function () {

//  var host = server.address().address
//  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

});

module.exports = app;