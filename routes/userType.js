const express = require('express');
const userTypeController = require('../controllers/userType');

const api = express.Router();

api.post('/userType', userTypeController.createUserType);
api.get('/userType', userTypeController.readUserType);
api.patch('/userType/:userTypeId', userTypeController.updateUserType);
api.delete('/userType/:userTypeId', userTypeController.deleteUserType);

module.exports = { api };
