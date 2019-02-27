var express = require('express');

var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, '/assets/images')));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/" + "templates/homes/homepage.html");
});

app.get("/homes", function(request, response) {
  response.sendFile(__dirname + "/" + "templates/homes/index.html");
});

app.get("/homesedit", function(request, response) {
  response.sendFile(__dirname + "/" + "templates/homes/edit.html");
});

app.get("/homescreate", function(request, response) {
  response.sendFile(__dirname + "/" + "templates/homes/create.html");
});

app.get('/residents', function(request, response) {
  response.sendFile(__dirname + "/" + "templates/residents/index.html");
});

app.get('/residentsedit', function(request, response) {
  response.sendFile(__dirname + "/" + "templates/residents/edit.html");
});

app.get('/residentscreate', function(request, response) {
  response.sendFile(__dirname + "/" + "templates/residents/create.html");
});
app.get('/residentsread', function(request, response) {
  response.sendFile(__dirname + "/" + "templates/residents/read.html");
});


app.listen(5000, function() {
  console.log('server is running');
});

module.exports = app;