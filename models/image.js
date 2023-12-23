const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageURL: { type: String, required: true },
  imageName: { type: String, required: true },
  propertyId: { type: String, required: true },
  imageId: { type: String, required: true },
});

const images = mongoose.model('image', imageSchema);

module.exports = images;
