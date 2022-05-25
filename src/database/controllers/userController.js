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

module.exports = {
  createUser,
};