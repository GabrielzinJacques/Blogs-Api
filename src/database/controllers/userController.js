const userServices = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const token = await userServices.createUser(req.body);
    return res.status(201).json({ token });
  } catch (error) {
    console.log('Err create User', error.message);
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
  const result = await userServices.getAll();
  return res.status(200).json(result);
} catch (error) {
  console.log('Err create User', error.message);
    next(error);
}
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await userServices.getById(id);
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    console.log('Err create User', error.message);
    
    next(error);
  }
};

module.exports = {
  createUser,
  getAll,
  getById,
};