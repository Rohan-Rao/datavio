const express = require('express');

const apiV1 = require('./api-routes/api-v1');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', async (req, res) => {
  res.send("DataVio's API's are up and running.");
});

/**
 *  All v1 routes specify here
 */
app.use('/api/v1', apiV1);
app.listen(port, () => console.log(`DataVio server started at port ${port}`));
