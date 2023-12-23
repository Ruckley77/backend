require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const port = process.env.PORT;
const ipAddress = process.env.IP_ADDRESS;
const apiVersion = process.env.API_VERSION;
const secretkey = process.env.SECRET_KEY;

module.exports = {
  dbUser,
  dbPassword,
  dbHost,
  port,
  ipAddress,
  apiVersion,
  secretkey,
};
