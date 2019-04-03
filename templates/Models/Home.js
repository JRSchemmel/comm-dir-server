var mongoose = require('../../mongoose_basics/node_modules/mongoose');
var Schema = mongoose.Schema;

var HomeSchema = new Schema({
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

var Home = mongoose.model('home', HomeSchema);

module.exports = Home;