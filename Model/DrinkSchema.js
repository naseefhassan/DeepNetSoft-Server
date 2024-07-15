/* eslint-disable new-cap */
const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  description: {type: String, required: true},
});

const Drinks = new mongoose.model('drinks', drinkSchema);

module.exports = Drinks;
