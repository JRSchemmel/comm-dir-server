const Home = require('../../Models/Home');

module.exports = {

  index(req, res, next) {
    const homeProps = req.body;
    console.log(homeProps);
    Home.get(homeProps)
      .then(home => res.send(home))
      .catch(next)
  },


  create(req, res, next) {
    const homeProps = req.body;
    console.log(homeProps);
    Home.create(homeProps)
      .then(home => res.send(home))
      .catch(next)
  },

  edit(req, res, next) {
    const homeId = req.params.id;
    const homeProps = req.body;

    Home.findByIdAndUpdate({ _id: homeId }, homeProps)
      .then(() => Home.findById({ _id: id }))
      .then(home => res.send(home))
      .catch(next);
  },

  delete(req, res, next) {
    const homeId = req.params.id;

    Home.findByIdAndRemove({ _id: homeId })
      .then(home => res.status(204).send(home))
      .catch(next);
  }
};