const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  cityName: { type: String, required: true },
  cityId: { type: String, required: true },
  stateId: { type: String, required: true },
});

const city = mongoose.model('city', citySchema);

module.exports = city;
