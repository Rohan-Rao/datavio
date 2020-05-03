const express = require('express');
const authRoute = require('./auth-route');

const router = express.Router();

router.use('/auth', authRoute); // authentication related routes

module.exports = router;
