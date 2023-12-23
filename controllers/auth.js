const jwt = require('../utils/jwt');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { randomUUID } = require('crypto');

const UserCrudService = require('../services/userService');
const userCrudService = new UserCrudService();

async function registerUser(req, res) {
  try {
    const { userName, name, email, password, userTypeId } = req.body;
    const randomUID = randomUUID();
    const userData = {
      userName,
      name,
      email: email.toLowerCase(),
      userTypeId,
      userId: randomUID,
    };

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    userData.password = hashPassword;

    const newUser = await userCrudService.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function loginUser(req, res) {
  try {
    const { userName, Email, Password } = req.body;

    const loginUser = await User.findOne({ userName: userName });

    res.status(200).json({
      access: jwt.createAccessToken(loginUser),
      refresh: jwt.createRefreshToken(loginUser),
    });
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function refreshAccessToken(req, res) {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).send('token required');
    }

    const { id } = jwt.verifyToken(token);
    const a = jwt.verifyToken(token);
    console.log(a);
    const foundUser = await User.findOne({
      userId: id,
    });

    if (!foundUser) {
      res.status(404).send('Cant Find User');
    } else {
      res.status(200).send({
        accessToken: jwt.createAccessToken(foundUser),
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  registerUser,
  loginUser,
  refreshAccessToken,
};
