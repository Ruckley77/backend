const express = require('express');
const authController = require('../controllers/auth');

const api = express.Router();

api.post('/auth/register', authController.registerUser);
api.post('/auth/login', authController.loginUser);
api.post('/auth/refreshAccessToken', authController.refreshAccessToken);

module.exports = { api };
