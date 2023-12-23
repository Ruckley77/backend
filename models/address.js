const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  addressDescription: { type: String, required: true },
  addressId: { type: String, required: true },
  cityId: { type: String, required: true },
});

const address = mongoose.model('address', addressSchema);

module.exports = address;
