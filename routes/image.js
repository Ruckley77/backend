const express = require('express');
const { upload, uploadMultiple } = require('../middlewares/multer');
const imageController = require('../controllers/image');

const api = express.Router();

api.post('/image', upload, imageController.createImage);
api.get('/image', upload, imageController.readImage);
api.patch('/image/:imageId', upload, imageController.updateImage);
api.delete('/image/:imageId', upload, imageController.deleteImage);

// api.post('/test-uploads', uploadMultiple, async (req, res) => {
//   const file = {
//     type: req.file.mimetype,
//     buffer: req.file.buffer,
//   };
//   try {
//     const buildImage = await uploadImage(file, 'multiple');

//     res.send({
//       status: 'SUCCESS',
//       imageName: buildImage,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = { api };
