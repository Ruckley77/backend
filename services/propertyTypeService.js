const CrudService = require('./crudService');
const PropertyType = require('../models/propertyType');

class PropertyTypeCrudService extends CrudService {
  constructor() {
    super(PropertyType, 'propertyTypeId');
  }
}

module.exports = PropertyTypeCrudService;
