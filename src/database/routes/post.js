const express = require('express');
const middleware = require('../middlewares');
const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/', middleware.valid.validateToken,
postController.createPost);

module.exports = postRouter;