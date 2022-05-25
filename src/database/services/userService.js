const { User } = require('../models');
const generateJWT = require('../utils/generateJWT');

const createUser = async (body) => {
  const { email } = body;
  const isValidEmail = await User.findOne({ where: { email } });

  if (isValidEmail) {
    const error = {
      status: 409,
      message: 'User already registered',
    };
    throw error;
  }

  const result = await User.create(body);
  delete result.dataValues.password;
  const payload = result.dataValues;
  const token = generateJWT(payload);
  return token;
};

const getAll = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  // result.forEach(({ dataValues }) => {
  //   delete dataValues.password;
  // });
  return result;
};

module.exports = {
  createUser, 
  getAll,
};