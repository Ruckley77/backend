const UserTypeCrudService = require('../services/userTypeService');

const userTypeCrudService = new UserTypeCrudService();

async function createUserType(req, res) {
  try {
    const data = req.body;
    const newUserType = await userTypeCrudService.create(data);
    res.status(201).json(newUserType);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}
async function readUserType(req, res) {
  try {
    const query = req.query;

    const readUserType = await userTypeCrudService.read(query);
    res.status(200).json(readUserType);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function updateUserType(req, res) {
  try {
    const { userTypeId } = req.params;
    const data = req.body;
    const updateUserType = await userTypeCrudService.update(userTypeId, data);
    res.status(200).json(updateUserType);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function deleteUserType(req, res) {
  try {
    const { userTypeId } = req.params;
    const deleteUserType = await userTypeCrudService.delete(userTypeId);
    res.status(200).json(deleteUserType);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

module.exports = {
  createUserType,
  readUserType,
  updateUserType,
  deleteUserType,
};
