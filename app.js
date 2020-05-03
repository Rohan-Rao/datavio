const express = require('express');
const bodyparser = require('body-parser');

const handleError = require('./middlewares');
const apiV1 = require('./api-routes/api-v1');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyparser.json({ limit: '2mb' })); // middleware to parse JSON data, Content-Type: application/json
app.use(bodyparser.urlencoded({ limit: '1mb', extended: false })); // middleware to parse form data, Content-Type: application/x-www-form-urlencoded

app.get('/', async (req, res) => {
  res.send("DataVio API's are up and running.");
});

/**
 *  All v1 routes specify here
 */
app.use('/api/v1', apiV1);

/**
 * Register a global error handler here.
 * According to the express docs, this should be the last middleware
 * registered on the express instance.
 */
app.use(handleError);

app.listen(port, () => console.log(`DataVio server started at port ${port}`));
