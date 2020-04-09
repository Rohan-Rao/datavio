const express = require('express');

const router = express.Router();

router.get('/auth/login', (req, res) => {
  res.send('login API');
});

module.exports = router;
