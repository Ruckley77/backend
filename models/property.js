const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  price: {
    require: true,
    type: Number,
  },
  area: {
    require: true,
    type: Number,
  },
  rooms: {
    require: true,
    type: Number,
  },
  bathrooms: {
    require: true,
    type: Number,
  },
  kitchens: {
    require: true,
    type: Number,
  },
  stories: {
    require: true,
    type: Number,
  },
  parkingSlots: {
    require: true,
    type: Number,
  },
  stratus: {
    require: true,
    type: Number,
  },
  verifiedDate: {
    type: Date,
  },
  hasFurniture: {
    require: true,
    type: Boolean,
  },
  isActive: {
    require: true,
    type: Boolean,
  },
  addressId: {
    require: true,
    type: String,
  },
  propertyOfferId: {
    require: true,
    type: String,
  },
  propertyTypeId: {
    require: true,
    type: String,
  },
  userId: {
    require: true,
    type: String,
  },
  propertyId: {
    require: true,
    type: String,
  },
});

const property = mongoose.model('property', propertySchema);

module.exports = property;
