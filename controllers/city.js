const CityCrudService = require('../services/cityService');
const StateCrudService = require('../services/stateService');

const cityCrudService = new CityCrudService();
const stateCrudService = new StateCrudService();

const { randomUUID } = require('crypto');
const randomCCID = randomUUID();

async function createCity(req, res) {
  try {
    const data = { ...req.body, cityId: randomCCID };
    const foundState = await stateCrudService.readById(data.stateId);
    if (!foundState) return res.status(404).json('cant find stateId');
    const newCity = await cityCrudService.create(data);
    res.status(201).json(newCity);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}
async function readCity(req, res) {
  try {
    const query = req.query;

    const readCity = await cityCrudService.read(query);
    res.status(200).json(readCity);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function updateCity(req, res) {
  try {
    const { cityId } = req.params;
    const data = req.body;
    const foundState = await stateCrudService.readById(data.stateId);
    if (!foundState) return res.status(404).json('cant find stateId');
    const updateCity = await cityCrudService.update(cityId, data);
    res.status(200).json(updateCity);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function deleteCity(req, res) {
  try {
    const { cityId } = req.params;
    const deleteCity = await cityCrudService.delete(cityId);
    res.status(200).json(deleteCity);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function lookupCityStateCountry(req, res) {
  const pipeline = [
    {
      $lookup: {
        from: 'states',
        localField: 'cityId',
        foreignField: 'stateId',
        as: 'stateInformation',
      },
    },
    {
      $unwind: '$stateInformation',
    },
    {
      $lookup: {
        from: 'countries',
        localField: 'stateInformation.stateId',
        foreignField: 'countryId',
        as: 'countryInformation',
      },
    },
    {
      $unwind: '$countryInformation',
    },
    {
      $project: {
        _id: 0,
        __v: 0,
        stateInformation: {
          _id: 0,
          __v: 0,
        },
        countryInformation: {
          _id: 0,
          __v: 0,
        },
      },
    },
  ];
  const aggregateCity = await cityCrudService.aggregateOptions(pipeline);
  res.status(200).json(aggregateCity);
}

module.exports = {
  createCity,
  readCity,
  updateCity,
  deleteCity,
  lookupCityStateCountry,
};
