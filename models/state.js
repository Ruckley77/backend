const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  stateName: { type: String, required: true },
  countryId: { type: String, required: true },
  stateId: { type: String, required: true },
});

const state = mongoose.model('state', stateSchema);

module.exports = state;
