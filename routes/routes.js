var HomeController = require('../templates/Models/controllers/home_controller');

module.exports = (app) => {
  app.post('/api/home', HomeController.create);
  app.put('/api/home/:id', HomeController.edit);
  app.delete('/api/home/:id', HomeController.delete);
  app.get('/api/home', HomeController.index);
};