const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userTypeId: { type: String, required: true },
  userId: { type: String, required: true },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
