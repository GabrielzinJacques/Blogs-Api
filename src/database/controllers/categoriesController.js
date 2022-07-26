const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res, next) => {
  const { name } = req.body;
  try {
    const result = await categoriesService.createCategory(name);
    return res.status(201).json(result);
  } catch (error) {
    console.log('Err login', error.message);
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await categoriesService.getAll();
    return res.status(200).json(result);
  } catch (error) {
    console.log('Err login', error.message);
    next(error);
  }
};

module.exports = {
  createCategory,
  getAll,
};
