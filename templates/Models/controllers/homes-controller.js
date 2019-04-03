var Home = require('../templates/models/Home');

module.exports = {

  create(req, res, next) {
    var homeProps = req.body;

    Home.create(homeProps)
      .then(home => res.send(home))
      .catch(next)
  },

  edit(req, res, next) {
    var homeId = req.params.id;
    var homeProps = req.body;

    Home.findByIdAndUpdate({ _id: homeId }, homeProps)
      .then(() => Home.findById({ _id: id }))
      .then(home => res.send(home))
      .catch(next);
  },

  delete(req, res, next) {
    var homeId = req.params.id;

    Home.findByIdAndRemove({ _id: homeId })
      .then(home => res.status(204).send(home))
      .catch(next);
  }
};