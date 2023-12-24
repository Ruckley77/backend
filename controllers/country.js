const CountryCrudService = require('../services/countryService');

const countryCrudService = new CountryCrudService();

const { randomUUID } = require('crypto');
const randomCID = randomUUID();

async function createCountry(req, res) {
  try {
    const data = { ...req.body, countryId: randomCID };
    const newCountry = await countryCrudService.create(data);
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}
async function readCountry(req, res) {
  try {
    const query = req.query;

    const readCountry = await countryCrudService.read(query);
    res.status(200).json(readCountry);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function updateCountry(req, res) {
  try {
    const { countryId } = req.params;
    const data = req.body;
    const updateCountry = await countryCrudService.update(countryId, data);
    res.status(200).json(updateCountry);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function deleteCountry(req, res) {
  try {
    const { countryId } = req.params;
    const deleteCountry = await countryCrudService.delete(countryId);
    res.status(200).json(deleteCountry);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

module.exports = { createCountry, readCountry, updateCountry, deleteCountry };
