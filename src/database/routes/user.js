const express = require('express');
const userController = require('../controllers/userController');
const middleware = require('../middlewares');

const userRouter = express.Router();

userRouter.post('/', middleware.valid.validadeBodyUser,
userController.createUser);

userRouter.get('/', middleware.valid.validateToken,
userController.getAll);

module.exports = userRouter;