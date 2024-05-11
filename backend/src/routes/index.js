const express = require('express');
const testingRouter = require('../tests');
const authRouter = require('./authRouter');
const folderRouter = require('./folderRouter');




const apiRouter = express.Router();

apiRouter.use('/testing', testingRouter );
apiRouter.use('/auth', authRouter );
apiRouter.use('/folder', folderRouter );

module.exports = apiRouter;