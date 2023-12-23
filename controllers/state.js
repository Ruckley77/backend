const StateCrudService = require('../services/stateService');
const CountryCrudService = require('../services/countryService');

const stateCrudService = new StateCrudService();
const countryCrudService = new CountryCrudService();

async function createState(req, res) {
  try {
    const data = req.body;
    const foundCountry = await countryCrudService.readById(data.countryId);
    if (!foundCountry) return res.status(404).json('cant find countryId');
    const newState = await stateCrudService.create(data);
    res.status(201).json(newState);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}
async function readState(req, res) {
  try {
    const query = req.query;

    const readState = await stateCrudService.read(query);
    res.status(200).json(readState);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function updateState(req, res) {
  try {
    const { stateId } = req.params;
    const data = req.body;
    const foundCountry = await countryCrudService.readById(data.countryId);
    if (!foundCountry) return res.status(404).json('cant find countryId');
    const updateState = await stateCrudService.update(stateId, data);
    res.status(200).json(updateState);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function deleteState(req, res) {
  try {
    const { stateId } = req.params;
    const deleteState = await stateCrudService.delete(stateId);
    res.status(200).json(deleteState);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

module.exports = {
  createState,
  readState,
  updateState,
  deleteState,
};
