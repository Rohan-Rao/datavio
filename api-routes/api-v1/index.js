const express = require('express');

const { ErrorHandler } = require('../../utils/error-handler');

const router = express.Router();

router.get('/auth/login', (req, res, next) => {
  try {
    if (!undefined) throw new ErrorHandler('404', 'Not Found');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
