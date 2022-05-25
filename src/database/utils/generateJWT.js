const jwt = require('jsonwebtoken');
require('dotenv');

// Secret key
const { JWT_SECRET } = process.env;

// Headers config
const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ data: payload }, JWT_SECRET, jwtConfig);
  return token;
};

module.exports = generateJWT;