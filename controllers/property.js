const PropertyCrudService = require('../services/propertyService');

const AddressCrudService = require('../services/addressService');
const PropertyOfferCrudService = require('../services/propertyOfferService');
const PropertyTypeCrudService = require('../services/propertyTypeService');
const UserCrudService = require('../services/userService');

const propertyCrudService = new PropertyCrudService();

const addressCrudService = new AddressCrudService();
const propertyOfferCrudService = new PropertyOfferCrudService();
const propertyTypeCrudService = new PropertyTypeCrudService();
const userCrudService = new UserCrudService();

const { randomUUID } = require('crypto');
const randomPID = randomUUID();

async function createProperty(req, res) {
  try {
    const data = { ...req.body, propertyId: randomPID };
    const foundAddress = await addressCrudService.readById(data.addressId);
    const foundPropertyOffer = await propertyOfferCrudService.readById(
      data.propertyOfferId
    );
    if (!foundPropertyOffer)
      return res.status(404).json('cant find propertyOfferId');
    if (!foundAddress) return res.status(404).json('cant find addressId');

    const foundPropertyType = await propertyTypeCrudService.readById(
      data.propertyTypeId
    );
    if (!foundPropertyType)
      return res.status(404).json('cant find propertyTypeId');

    const foundUser = await userCrudService.readById(data.userId);
    if (!foundUser) return res.status(404).json('cant find userId');

    const newProperty = await propertyCrudService.create(data);
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}
async function readProperty(req, res) {
  try {
    const query = req.query;

    const readProperty = await propertyCrudService.read(query);
    res.status(200).json(readProperty);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function updateProperty(req, res) {
  try {
    const { propertyId } = req.params;
    const data = req.body;
    const updateProperty = await propertyCrudService.update(propertyId, data);
    res.status(200).json(updateProperty);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function deleteProperty(req, res) {
  try {
    const { propertyId } = req.params;
    const deleteProperty = await propertyCrudService.delete(propertyId);
    res.status(200).json(deleteProperty);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function filterAnything(req, res) {
  try {
    // Extract query parameters from the request
    const params = req.query;

    // Use the findWithParams function to filter properties based on dynamic parameters
    const result = await propertyCrudService.findWithParams(params);

    res.json(result);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}
module.exports = {
  createProperty,
  readProperty,
  updateProperty,
  deleteProperty,
  filterAnything,
  // filterProperty,
};

// async function filterProperty(req, res) {
//   try {
//     const filter = req.query.filterBy;

//     const filterProperty = await propertyCrudService.findInRange(
//       filter,
//       req.query.min,
//       req.query.max
//     );
//     res.status(200).json(filterProperty);
//   } catch (error) {
//     res.status(400).send(`${error}`);
//   }
// }
