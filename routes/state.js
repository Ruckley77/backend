const express = require('express');
const stateController = require('../controllers/state');

const api = express.Router();

api.post('/state', stateController.createState);
api.get('/state', stateController.readState);
api.patch('/state/:stateId', stateController.updateState);
api.delete('/state/:stateId', stateController.deleteState);

api.get('/stateInfo', stateController.lookupStateCountry);

module.exports = { api };
