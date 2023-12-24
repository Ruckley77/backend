const express = require('express');
const cityController = require('../controllers/city');

const api = express.Router();

api.post('/city', cityController.createCity);
api.get('/city', cityController.readCity);
api.patch('/city/:cityId', cityController.updateCity);
api.delete('/city/:cityId', cityController.deleteCity);

api.get('/cityInfo', cityController.lookupCityStateCountry);

module.exports = { api };
