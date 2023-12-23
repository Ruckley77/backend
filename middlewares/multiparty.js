const multiparty = require('connect-multiparty');

const imageMultiparty = multiparty({ uploadDir: './uploads/images/users' });

module.exports = { imageMultiparty };
