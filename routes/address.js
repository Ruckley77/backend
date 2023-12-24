const express = require('express');
const addressController = require('../controllers/address');

const api = express.Router();

api.post('/address', addressController.createAddress);
api.get('/address', addressController.readAddress);
api.patch('/address/:addressId', addressController.updateAddress);
api.delete('/address/:addressId', addressController.deleteAddress);
api.get('/addressInfo', addressController.lookupAddressCityStateCountry);

module.exports = { api };
