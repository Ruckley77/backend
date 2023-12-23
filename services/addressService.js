const CrudService = require('./crudService');
const Address = require('../models/address');

class AddressCrudService extends CrudService {
  constructor() {
    super(Address, 'addressId');
  }
}

module.exports = AddressCrudService;
