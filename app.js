const express = require('express');

const handleError = require('./middlewares');
const apiV1 = require('./api-routes/api-v1');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', async (req, res) => {
  res.send("DataVio API's are up and running.");
});

/**
 *  All v1 routes specify here
 */
app.use('/api/v1', apiV1);

/**
 * Register a global error handler here.
 * According to thr express docs, this should be the last middleware
 * registered on the express instance.
 */
app.use(handleError);

app.listen(port, () => console.log(`DataVio server started at port ${port}`));
