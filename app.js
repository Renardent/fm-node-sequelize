////Express routing
const express = require('express');
const router = require('./routers/index');

const app = express();
const bodyParser = express.json();
app.use(bodyParser);
app.use('/api', router);

module.exports = app;