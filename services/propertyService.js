const CrudService = require('./crudService');
const Property = require('../models/property');

class PropertyCrudService extends CrudService {
  constructor() {
    super(Property, 'propertyId');
  }
}

module.exports = PropertyCrudService;
