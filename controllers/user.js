const bcrypt = require('bcryptjs');
const { randomUUID } = require('crypto');

const UserCrudService = require('../services/userService');
const UserTypeIdCrudService = require('../services/userTypeService');
const userCrudService = new UserCrudService();
const userTypeIdCrudService = new UserTypeIdCrudService();

async function createUser(req, res) {
  try {
    const { userName, name, email, password, userTypeId } = req.body;
    const randomUID = randomUUID();
    const data = {
      userName,
      name,
      email: email.toLowerCase(),
      userTypeId,
      userId: randomUID,
    };

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    data.password = hashPassword;
    const foundUserTypeId = await userTypeIdCrudService.readById(
      data.userTypeId
    );
    if (!foundUserTypeId) return res.status(404).json('cant find userTypeId');
    const newUser = await userCrudService.create(data);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}
async function readUser(req, res) {
  try {
    const query = req.query;

    const readUser = await userCrudService.read(query);
    res.status(200).json(readUser);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function updateUser(req, res) {
  try {
    const { userId } = req.params;
    const data = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(data.password, salt);

    data.password = hashPassword;
    const updateUser = await userCrudService.update(userId, data);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function deleteUser(req, res) {
  try {
    const { userId } = req.params;
    const deleteUser = await userCrudService.delete(userId);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
};
