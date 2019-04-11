const mongoose = require('../../mongoose_basics/node_modules/mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema({
  address_number: {
    type: Number,
    required: true
  },
  street_name: {
    type: String,
    required: true
  },
  street_direction: {
    type: String,
    required: true,
    value: ('N', 'S', 'E', 'W')
  },
  dock_number: {
    type: Number
  },
  county: {
    type: String,
    required: true,
    value: ('Johnson', 'Wyandotte')
  },
  },

);

const Home = mongoose.model('home', HomeSchema);

module.exports = Home;