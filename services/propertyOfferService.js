const CrudService = require('./crudService');
const PropertyOffer = require('../models/propertyOffer');

class PropertyOfferCrudService extends CrudService {
  constructor() {
    super(PropertyOffer, 'propertyOfferId');
  }
}

module.exports = PropertyOfferCrudService;
