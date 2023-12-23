const CrudService = require('./crudService');
const Image = require('../models/image');

class ImageCrudService extends CrudService {
  constructor() {
    super(Image, 'imageId');
  }
}

module.exports = ImageCrudService;
