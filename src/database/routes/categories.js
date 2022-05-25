const express = require('express');
const middleware = require('../middlewares');
const categoriesController = require('../controllers/categoriesController');

const categoriesRouter = express.Router();

categoriesRouter.post('/', middleware.valid.validateToken,
middleware.valid.validateBodyCategories,
categoriesController.createCategory);

module.exports = categoriesRouter;