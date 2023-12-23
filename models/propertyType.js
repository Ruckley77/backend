const mongoose = require('mongoose');

const propertyTypeSchema = new mongoose.Schema({
  propertyTypeName: { type: String, required: true },
  propertyTypeId: { type: String, required: true },
});

const propertyType = mongoose.model('propertyType', propertyTypeSchema);

module.exports = propertyType;
