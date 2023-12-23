const express = require('express');
const userController = require('../controllers/user');
const auth_md = require('../middlewares/auth');

const api = express.Router();

api.post('/user', userController.createUser);
api.get('/user', [auth_md.awsAuth], userController.readUser);
api.patch('/user/:userId', userController.updateUser);
api.delete('/user/:userId', userController.deleteUser);

module.exports = { api };
