const logger = require('../utils/logger');
const { httpStatus, httpErrorCodes, httpErrorMessages } = require('../config/config');
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

  errObj.status = httpStatus.FAIL;
  errObj.statusCode = err.statusCode || httpErrorCodes.INTERNAL_SRVER_ERROR;
  errObj.statusMessage = err.statusMessage || httpErrorMessages.INTERNAL_SRVER_ERROR;
  errObj.additionalInfo = err.additionalInfo || '';

  res.json(errObj);
};

module.exports = handleError;
