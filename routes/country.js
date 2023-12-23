const express = require('express');
const countryController = require('../controllers/country');

const api = express.Router();

api.post('/country', countryController.createCountry);
api.get('/country', countryController.readCountry);
api.patch('/country/:countryId', countryController.updateCountry);
api.delete('/country/:countryId', countryController.deleteCountry);

module.exports = { api };
