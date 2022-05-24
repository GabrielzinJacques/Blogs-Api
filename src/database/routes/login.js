const express = require('express');
const middleware = require('../middlewares');
const loginController = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/', middleware.valid.validateBodyLogin,
loginController);

module.exports = loginRouter;