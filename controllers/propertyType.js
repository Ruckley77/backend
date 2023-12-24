const PropertyTypeCrudService = require('../services/propertyTypeService');

const propertyTypeCrudService = new PropertyTypeCrudService();
const { randomUUID } = require('crypto');
const randomPTID = randomUUID();

async function createPropertyType(req, res) {
  try {
    const data = { ...req.body, propertyTypeId: randomPTID };
    const newPropertyType = await propertyTypeCrudService.create(data);
    res.status(201).json(newPropertyType);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}
async function readPropertyType(req, res) {
  try {
    const query = req.query;

    const readPropertyType = await propertyTypeCrudService.read(query);
    res.status(200).json(readPropertyType);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function updatePropertyType(req, res) {
  try {
    const { propertyTypeId } = req.params;
    const data = req.body;
    const updatePropertyType = await propertyTypeCrudService.update(
      propertyTypeId,
      data
    );
    res.status(200).json(updatePropertyType);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function deletePropertyType(req, res) {
  try {
    const { propertyTypeId } = req.params;
    const deletePropertyType = await propertyTypeCrudService.delete(
      propertyTypeId
    );
    res.status(200).json(deletePropertyType);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

module.exports = {
  createPropertyType,
  readPropertyType,
  updatePropertyType,
  deletePropertyType,
};
