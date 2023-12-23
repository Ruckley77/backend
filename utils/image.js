const path = require('path');

function getFilePath(file) {
  const getPath = file.path;
  const sepPath = getPath.split(path.sep);

  return `${sepPath[1]}/${sepPath[2]}`;
}

module.exports = {
  getFilePath,
};
