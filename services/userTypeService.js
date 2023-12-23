const CrudService = require('./crudService');
const userType = require('../models/userType');

class UserTypeCrudService extends CrudService {
  constructor() {
    super(userType, 'userTypeId');
  }
}

module.exports = UserTypeCrudService;
