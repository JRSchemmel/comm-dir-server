//This file is used to place "routes" in its own file.
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
app.use(router);
app.use(express.static(path.join(__dirname, '../assets/images')));
const bodyParser = require('body-parser');
//Middle ware that is specific to this router would go here.

//Define the "Homes Page" route.
router.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "../templates/homes", "homepage.html"));
});
//Define the "Homes Directory" route.
router.get("/homes", function(request, response) {
  response.sendFile(path.join(__dirname, "../templates/homes", "index.html"));
});
//Define the "Homes Edit" route.
router.get("/homesedit", function(request, response) {
  response.sendFile(path.join(__dirname, "../templates/homes", "edit.html"));
});
//Define the "Homes Create" route.
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

app.listen(5000, () => {
  console.log('Server running on port 5000 for front-end web server');
  });

module.exports = router;