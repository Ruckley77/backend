const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { apiVersion } = require('./constants');

const exp = express();

// Import Routes
const addressRoutes = require('./routes/address');
const authRoutes = require('./routes/auth');
const cityRoutes = require('./routes/city');
const countryRoutes = require('./routes/country');
const imageRoutes = require('./routes/image');
const propertyRoutes = require('./routes/property');
const propertyOfferRoutes = require('./routes/propertyOffer');
const propertyTypeRoutes = require('./routes/propertyType');
const stateRoutes = require('./routes/state');
const userRoutes = require('./routes/user');
const userTypeRoutes = require('./routes/userType');

exp.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
exp.use(bodyParser.json());

exp.use(cors());

// Routes Config
exp.use(`/api/${apiVersion}`, addressRoutes.api);
exp.use(`/api/${apiVersion}`, authRoutes.api);
exp.use(`/api/${apiVersion}`, cityRoutes.api);
exp.use(`/api/${apiVersion}`, countryRoutes.api);
exp.use(`/api/${apiVersion}`, imageRoutes.api);
exp.use(`/api/${apiVersion}`, propertyRoutes.api);
exp.use(`/api/${apiVersion}`, propertyOfferRoutes.api);
exp.use(`/api/${apiVersion}`, propertyTypeRoutes.api);
exp.use(`/api/${apiVersion}`, stateRoutes.api);
exp.use(`/api/${apiVersion}`, userRoutes.api);
exp.use(`/api/${apiVersion}`, userTypeRoutes.api);

module.exports = exp;
