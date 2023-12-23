const CrudService = require('./crudService');
const Country = require('../models/country');

class CountryCrudService extends CrudService {
  constructor() {
    super(Country, 'countryId');
  }
}

module.exports = CountryCrudService;
