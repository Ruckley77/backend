// @ts-nocheck
const jwt = require('jsonwebtoken');
const { secretkey } = require('../constants');

function createAccessToken(user) {
  try {
    const expToken = new Date();
    expToken.setMinutes(expToken.getMinutes() + 15);

    const payload = {
      tokenType: 'Access',
      id: user.userId,
      startTime: Date.now(),
      expTime: expToken.getTime(),
    };
    return jwt.sign(payload, secretkey);
  } catch (error) {
    console.log(`${error}, error creating access token`);
  }
}

function createRefreshToken(user) {
  try {
    const expToken = new Date();
    expToken.setDate(expToken.getDate() + 7);

    const payload = {
      tokenType: 'Refresh',
      id: user.userId,
      startTime: Date.now(),
      expTime: expToken.getTime(),
    };
    return jwt.sign(payload, secretkey);
  } catch (error) {
    console.log(`${error}, error creating refresh token`);
  }
}

function verifyToken(token) {
  try {
    const verifiedToken = jwt.verify(token, secretkey);
    if (!verifiedToken) {
      return console.log('Could not verify token');
    }
    return verifiedToken;
  } catch (error) {
    console.log(`${error}, error verifying token`);
  }
}

module.exports = {
  createAccessToken,
  createRefreshToken,
  verifyToken,
};
