const util = require('util');
const jwt = require('jsonwebtoken');

const connectionPool = require('../models/init-db-connection');
const { authQueries } = require('../config/dbQueries');
const logger = require('../utils/logger');
const { generateError } = require('../utils/error-handler');
const {
  registrationOptions, httpErrorCodes, secretKeys, sqlErrorCodes
} = require('../config/config');
const messages = require('../config/messages');

const promiseQuery = util.promisify(connectionPool.query).bind(connectionPool);

const register = (bodyParams) => new Promise((resolve, reject) => {
  logger.info('in controllers/auth.js -> register function');
  const { emailId, userPassword, registeredWith } = bodyParams;
  const valuesToInsertInDb = [];

  if (registrationOptions[registeredWith] === registrationOptions.DATAVIO && !userPassword) {
    return reject(generateError(httpErrorCodes.INTERNAL_SRVER_ERROR, messages.PASSWORD_REQUIRED));
  }
  Object.keys(bodyParams).map((key) => valuesToInsertInDb.push(bodyParams[key]));
  return promiseQuery(authQueries.CREATE_NEW_DATAVIO_USER, valuesToInsertInDb).then((result) => {
    if (result.insertId) {
      const jwtToken = jwt.sign({ id: result.insertId, emailId }, secretKeys.JWT_SECRET_KET);
      resolve(jwtToken);
    }
  }).catch((err) => {
    let statusCode = '';
    let errMessage = '';
    if (err.code && err.code === sqlErrorCodes[err.code]) {
      statusCode = httpErrorCodes.CONFLICT;
      errMessage = messages[err.code];
    } else {
      statusCode = httpErrorCodes.INTERNAL_SRVER_ERROR;
      errMessage = '';
    }
    reject(generateError(statusCode, errMessage));
  });
});

const login = (bodyParams) => new Promise((resolve, reject) => {
  logger.info('in controllers/auth.js -> login function');
  checkLoginMethod(bodyParams).then((result) => {

  });
}).catch((err) => {
  console.log(err);
});

const checkLoginMethod = (bodyParams) => new Promise((resolve, reject) => {
  logger.info('in controllers/auth.js -> checkLoginMethod function');
  if (registrationOptions[bodyParams.loginMethod] === registrationOptions.DATAVIO) {
    return promiseQuery(
      authQueries.CHECK_USER_EXIST,
      [bodyParams.emailId, bodyParams.userPassword],
    );
  }
  return Promise.resolve();
}).then();

module.exports = {
  register,
  login,
};
