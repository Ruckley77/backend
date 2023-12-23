const express = require('express');
const addressController = require('../controllers/Address');

const api = express.Router();

api.post('/address', addressController.createAddress);
api.get('/address', addressController.readAddress);
api.patch('/address/:addressId', addressController.updateAddress);
api.delete('/address/:addressId', addressController.deleteAddress);

module.exports = { api };
