const express = require('express');
const testingRouter = require('../tests');
// const v1Router = require('./v1')




const apiRouter = express.Router();

apiRouter.use('/testing', testingRouter );

module.exports = apiRouter