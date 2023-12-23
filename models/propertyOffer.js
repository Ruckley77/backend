const mongoose = require('mongoose');

const propertyOfferSchema = new mongoose.Schema({
  propertyOfferName: { type: String, required: true },
  propertyOfferId: { type: String, required: true },
});

const propertyOffer = mongoose.model('propertyOffer', propertyOfferSchema);

module.exports = propertyOffer;
