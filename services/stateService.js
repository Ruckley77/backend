const CrudService = require('./crudService');
const State = require('../models/state');

class StateCrudService extends CrudService {
  constructor() {
    super(State, 'stateId');
  }
}

module.exports = StateCrudService;
