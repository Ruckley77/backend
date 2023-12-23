const AddressCrudService = require('../services/addressService');
const CityCrudService = require('../services/cityService');

const addressCrudService = new AddressCrudService();
const cityCrudService = new CityCrudService();

async function createAddress(req, res) {
  try {
    const data = req.body;
    const foundCity = await cityCrudService.readById(data.cityId);
    if (!foundCity) return res.status(404).json('cant find cityId');
    const newAddress = await addressCrudService.create(data);
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}
async function readAddress(req, res) {
  try {
    const query = req.query;

    const readAddress = await addressCrudService.read(query);
    res.status(200).json(readAddress);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function updateAddress(req, res) {
  try {
    const { addressId } = req.params;
    const data = req.body;
    const foundCity = await cityCrudService.readById(data.cityId);
    if (!foundCity) return res.status(404).json('cant find cityId');
    const updateAddress = await addressCrudService.update(addressId, data);
    res.status(200).json(updateAddress);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function deleteAddress(req, res) {
  try {
    const { addressId } = req.params;
    const deleteAddress = await addressCrudService.delete(addressId);
    res.status(200).json(deleteAddress);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

module.exports = {
  createAddress,
  readAddress,
  updateAddress,
  deleteAddress,
};
