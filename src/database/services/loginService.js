const { User } = require('../models');
const generateToken = require('../utils/generateJWT');

const login = async (email, password) => {
  const result = await User.findOne({ where: { email } });

  if (!result || result.password !== password) {
    const error = { status: 400, message: 'Invalid fields' };
    throw error;
  }
  
  delete result.dataValues.password;
  const payload = result.dataValues;
  const token = generateToken(payload);
  return token;
};

module.exports = {
  login,
};