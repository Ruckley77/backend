const { uploadImage } = require('../services/firebaseService');
const ImageCrudService = require('../services/imagesService');
const PropertyCrudService = require('../services/propertyService');

const imageCrudService = new ImageCrudService();
const propertyCrudService = new PropertyCrudService();

async function createImage(req, res) {
  const file = {
    type: req.file.mimetype,
    buffer: req.file.buffer,
    name: req.file.originalname,
  };
  try {
    const buildImage = await uploadImage(file, 'single');
    const URL = buildImage?.downloadURL;
    const imageName = buildImage?.fileName;
    const data = {
      ...req.body,
      imageURL: URL,
      imageName,
    };
    const foundProperty = await propertyCrudService.readById(data.propertyId);
    if (!foundProperty) return res.status(404).json('cant find propertyId');
    const newImage = await imageCrudService.create(data);
    res.status(201).json(newImage);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}
async function readImage(req, res) {
  try {
    const query = req.query;
    const readImage = await imageCrudService.read(query);
    res.status(200).json(readImage);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function updateImage(req, res) {
  try {
    const { imageId } = req.params;
    const data = req.body;
    const updateImage = await imageCrudService.update(imageId, data);
    res.status(200).json(updateImage);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

async function deleteImage(req, res) {
  try {
    const { imageId } = req.params;
    const deleteImage = await imageCrudService.delete(imageId);
    res.status(200).json(deleteImage);
  } catch (error) {
    res.status(400).send(`${error}`);
  }
}

module.exports = {
  createImage,
  readImage,
  updateImage,
  deleteImage,
};
