const CrudService = require('./crudService');
const City = require('../models/city');

class CityCrudService extends CrudService {
  constructor() {
    super(City, 'cityId');
  }
}

module.exports = CityCrudService;
