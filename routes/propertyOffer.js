const express = require('express');
const propertyOfferController = require('../controllers/propertyOffer');

const api = express.Router();

api.post('/propertyOffer', propertyOfferController.createPropertyOffer);
api.get('/propertyOffer', propertyOfferController.readPropertyOffer);
api.patch(
  '/propertyOffer/:propertyOfferId',
  propertyOfferController.updatePropertyOffer
);
api.delete(
  '/propertyOffer/:propertyOfferId',
  propertyOfferController.deletePropertyOffer
);

module.exports = { api };
