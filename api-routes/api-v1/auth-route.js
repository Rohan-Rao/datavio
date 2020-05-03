const express = require('express');
const logger = require('../../utils/logger');

const { httpStatus, httpErrorCodes, httpErrorMessages } = require('../../config/config');
const authController = require('../../controllers/auth');
const { generateError } = require('../../utils/error-handler');

const router = express.Router();


router.post('/register', (req, res) => {
  authController.register(req.body).then((result) => {
    res.json({
      status: httpStatus.SUCCESS,
      statusCode: httpErrorCodes.CREATED,
      statusMessage: httpErrorMessages.CREATED,
      data: {
        token: result,
      },
    });
  }).catch((err) => {
    let error = { ...err };
    if (!error.statusCode) {
      error = generateError(httpErrorCodes.INTERNAL_SRVER_ERROR, '');
    }
    const loggedError = { ...error, stack: err.stack };
    logger.error(JSON.stringify(loggedError, null, 2));
    res.status(error.statusCode).json(error);
  });
});

router.post('/login', (req, res) => {
  authController.login(req.body).then((result) => {

  }).catch((err) => {
    logger.error(err);
    res.json(err);
  });
});

module.exports = router;
