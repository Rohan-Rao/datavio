const changeCase = require('change-case');

const toSnakeCase = (obj) => {
  const transformedObj = {};
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    const snakeCasedKey = changeCase.snakeCase(keys[i]);
    transformedObj[snakeCasedKey] = obj[keys[i]];
  }
  return transformedObj;
};

module.exports = {
  toSnakeCase,
};
