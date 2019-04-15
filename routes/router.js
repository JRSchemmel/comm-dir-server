//This file is used to place "routes" in its own file.
const express = require('express');
//const router = express();
const app = express();
const router = express.Router();
//const router = require('/router');
const path = require('path');
console.log("path.join()router : ", path.join(__dirname, "/router"));
//router.use(router);
app.use(router);
//console.log ('got to router module');
//router.use(express.static(path.join(__dirname, '../assets/images')));
app.use(express.static(path.join(__dirname, '../assets/images')));
//console.log('Url: ', req.originalUrl);
//app.use(function(req, res, next) {
//  console.log('Url: ', req.originalUrl);
//  res.send(req.originalUrl);
//    });
//console.log ('path:', require('path'));
const bodyParser = require('body-parser');
//Middle ware that is specific to this router would go here.

//Define the "Home Page" route.

//router.get("/", (res, req) => res.end(
//app.use(function(req, res, next) {
//  console.log('Url: ', req.originalUrl)));
//  res.send(req.originalUrl);

router.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "../templates/homes", "homepage.html"));
});
//Define the "Home Directory" route.
const p = '...';
router.get("/homes", function(request, response, next) {
  p.then (successful => {
    if (successful) {
      console.log ('got to router.get /homes module');
      response.sendFile(path.join(__dirname, "../templates/homes", "index.html"));
    }
    else {
      console.log ('/homes:');
    }
  });
});

//router.get("/homes", function(request, response, next) {
//  console.log ('got to router.get /homes module')
//response.sendFile(path.join(__dirname, "../templates/homes", "index.html"));
//  next(console.log ('/homes:'));
//});

//router.get("/homes", function(request, response) {
//  console.log ('got to router.get /homes module')
//response.sendFile(path.join(__dirname, "../templates/homes", "index.html"));
//});

//console.log ('req.params: ', router.get(req.params));
router.get('/', (request, response) => {  //Test if server is actually working.
  console.log(`URL: ${request.url}`);  //Display URL on console
  response.send('Hello, Server!');     //Display "Hello, Server!" on web response
});
//console.log('URL: ', ${request.url});
//console.log ("URL: ", Request.RawUrl);
//var util = require('util'); // core module

//console.log ("arguments contents are: ", (arguments));
//console.log ('got to router.get module');

//Define the "Home Edit" route.
router.get("/homesedit", function(request, response) {
  response.sendFile(path.join(__dirname, "../templates/homes", "edit.html"));
});
//Define the "Home Create" route.
router.get("/homescreate", function(request, response) {
  response.sendFile(path.join(__dirname, "../templates/homes", "create.html"));
});
//Define the "Residents Directory" route.
router.get('/residents', function(request, response) {
  response.sendFile(path.join(__dirname, "../templates/residents", "index.html"));
});
//Define the "Resident Edit" route.
router.get('/residentsedit', function(request, response) {
  response.sendFile(path.join(__dirname, "../templates/residents", "edit.html"));
});
//Define the "Resident Create" route.
router.get('/residentscreate', function(request, response) {
  response.sendFile(path.join(__dirname, "../templates/residents", "create.html"));
});
//Define the "Resident Read" route.
router.get('/residentsread', function(request, response) {
  response.sendFile(path.join(__dirname, "../templates/residents", "read.html"));
});

//var util = require('util'); // core module
//console.log('util: ', util.inspect(request));

//app.use(function(req, res, next) {
//  console.log('Url: ', req.originalUrl);
//  res.send(req.originalUrl);
    //});

console.log("path.join()create.html : ", path.join(__dirname, "../templates/homes", "create.html"));

console.log('router.get: ', router.get);

module.exports = router;