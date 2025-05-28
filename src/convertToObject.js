'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};

  sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element !== '')
    .map((element) => {
      const temp = element.split(':');
      const [key, value] = [temp[0].trim(), temp[1].trim()];

      newObject[key] = value;
    });

  return newObject;
}

module.exports = convertToObject;
