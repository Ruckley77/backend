const mongoose = require('mongoose');

const userTypeSchema = new mongoose.Schema({
  userTypeName: { type: String, required: true },
  userTypeId: { type: String, required: true },
});

const userType = mongoose.model('userType', userTypeSchema);

module.exports = userType;
