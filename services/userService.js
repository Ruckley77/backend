const CrudService = require('./crudService');
const User = require('../models/user');

class UserCrudService extends CrudService {
  constructor() {
    super(User, 'userId');
  }
}

module.exports = UserCrudService;
