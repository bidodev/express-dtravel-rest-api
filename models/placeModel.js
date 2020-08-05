/**
 * Module dependencies.
 */
const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'The product name is required'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'The description is required'],
  },
  country: String,
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
