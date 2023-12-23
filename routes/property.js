const express = require('express');
const propertyController = require('../controllers/property');

const api = express.Router();

api.post('/property', propertyController.createProperty);
api.get('/property', propertyController.readProperty);
// api.get('/properties', propertyController.filterProperty);
api.patch('/property/:propertyId', propertyController.updateProperty);
api.delete('/property/:propertyId', propertyController.deleteProperty);

api.get('/properties', propertyController.filterAnything);

module.exports = { api };
