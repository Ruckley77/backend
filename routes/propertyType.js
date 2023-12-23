const express = require('express');
const propertyTypeController = require('../controllers/propertyType');

const api = express.Router();

api.post('/propertyType', propertyTypeController.createPropertyType);
api.get('/propertyType', propertyTypeController.readPropertyType);
api.patch(
  '/propertyType/:propertyTypeId',
  propertyTypeController.updatePropertyType
);
api.delete(
  '/propertyType/:propertyTypeId',
  propertyTypeController.deletePropertyType
);

module.exports = { api };
