const PropertyOfferCrudService = require('../services/propertyOfferService');

const propertyOfferCrudService = new PropertyOfferCrudService();

async function createPropertyOffer(req, res) {
  try {
    const data = req.body;
    const newPropertyOffer = await propertyOfferCrudService.create(data);
    res.status(201).json(newPropertyOffer);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}
async function readPropertyOffer(req, res) {
  try {
    const query = req.query;

    const readPropertyOffer = await propertyOfferCrudService.read(query);
    res.status(200).json(readPropertyOffer);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function updatePropertyOffer(req, res) {
  try {
    const { propertyOfferId } = req.params;
    const data = req.body;
    const updatePropertyOffer = await propertyOfferCrudService.update(
      propertyOfferId,
      data
    );
    res.status(200).json(updatePropertyOffer);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function deletePropertyOffer(req, res) {
  try {
    const { propertyOfferId } = req.params;
    const deletePropertyOffer = await propertyOfferCrudService.delete(
      propertyOfferId
    );
    res.status(200).json(deletePropertyOffer);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

module.exports = {
  createPropertyOffer,
  readPropertyOffer,
  updatePropertyOffer,
  deletePropertyOffer,
};
