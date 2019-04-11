const HomeController = require('../templates/Models/controllers/home_controller');

module.exports = (app) => {
  app.post('/api/home', function(req, res){HomeController.create});
  app.put('/api/home/:id', function(req, res){HomeController.edit});
  app.delete('/api/home/:id', function(req, res){HomeController.delete});
  app.get('/api/home', function(req, res){HomeController.index});
};