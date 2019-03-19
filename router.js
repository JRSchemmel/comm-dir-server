//This file is used to place "routes" in its own file.
var express = require('express');
var app = express();
var router = express.Router();
app.use(router);

//Middle ware that is specific to this router would go here.

//Define the "Home Page" route.
router.get("/", function(request, response) {
  response.sendFile(__dirname + "/" + "templates/homes/homepage.html");
});
//Define the "Home Directory" route.
router.get("/homes", function(request, response) {
response.sendFile(__dirname + "/" + "templates/homes/index.html");
});
//Define the "Home Edit" route.
router.get("/homesedit", function(request, response) {
  response.sendFile(__dirname + "/" + "templates/homes/edit.html");
});
//Define the "Home Create" route.
router.get("/homescreate", function(request, response) {
  response.sendFile(__dirname + "/" + "templates/homes/create.html");
});
//Define the "Residents Directory" route.
router.get('/residents', function(request, response) {
  response.sendFile(__dirname + "/" + "templates/residents/index.html");
});
//Define the "Resident Edit" route.
router.get('/residentsedit', function(request, response) {
  response.sendFile(__dirname + "/" + "templates/residents/edit.html");
});
//Define the "Resident Create" route.
router.get('/residentscreate', function(request, response) {
  response.sendFile(__dirname + "/" + "templates/residents/create.html");
});
//Define the "Resident Read" route.
router.get('/residentsread', function(request, response) {
  response.sendFile(__dirname + "/" + "templates/residents/read.html");
});

module.exports = router;