const express = require('express');
const authRoute = require('./auth-route');

const { ErrorHandler } = require('../../utils/error-handler');

const router = express.Router();

router.use('/auth', authRoute); // authentication related routes

module.exports = router;
