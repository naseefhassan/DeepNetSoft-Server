/* eslint-disable new-cap */
const mongoose = require('mongoose');

const BrunchSchema = new mongoose.Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  description: {type: String, required: true},
});

const Brunchs = new mongoose.model('borunchs', BrunchSchema);

module.exports = Brunchs;
