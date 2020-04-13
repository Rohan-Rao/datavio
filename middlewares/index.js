const logger = require('../utils/logger');

/**
 * a global error handling middleware function
 * @param {Object} err
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

// eslint-disable-next-line no-unused-vars
const handleError = (err, req, res, next) => {
  logger.error(err);
  const errObj = {};

  errObj.status = 'ERROR';
  errObj.statusCode = err.statusCode || 500;
  errObj.message = errObj.statusCode === 500 ? 'Internal Server Error' : err.message;

  res.json(errObj);
};

module.exports = handleError;
