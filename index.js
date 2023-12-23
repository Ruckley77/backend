const mongoose = require('mongoose');
const exp = require('./app');
const {
  dbUser,
  dbPassword,
  dbHost,
  ipAddress,
  apiVersion,
  port,
} = require('./constants');

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}`);
    exp.listen(port, () => {
      console.log(`API REST`);
      console.log(`${ipAddress}:${port}/api/${apiVersion}`);
    });
  } catch (error) {
    console.log(`${error}, error in connectDB`);
  }
};

connectDB();
