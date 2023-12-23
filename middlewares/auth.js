const jwt = require('../utils/jwt');

async function awsAuth(req, res, next) {
  try {
    const headerAuth = req.headers.authorization;
    if (!headerAuth) return console.log('No Header Auth');
    const token = headerAuth.replace('Bearer', '');
    const payload = jwt.verifyToken(token);
    const { expTime } = payload;

    if (expTime <= Date.now) {
      return console.log('Token has expired');
    }

    req.user = payload;
    next();
  } catch (error) {
    res.status(400).send(`${error}, error in awsAuth`);
  }
}

module.exports = {
  awsAuth,
};
