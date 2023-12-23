const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  countryName: { type: String, required: true },
  countryId: { type: String, required: true },
});

const country = mongoose.model('country', countrySchema);

module.exports = country;
