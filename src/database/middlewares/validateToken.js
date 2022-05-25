const jwt = require('jsonwebtoken');
require('dotenv');

const { JWT_SECRET } = process.env;

const validadeToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.data;
    next();
  } catch (error) {
    console.log('Err token', error.message);
    const err = {
      status: 401,
      message: 'Expired or invalid token',
    };
    next(err);
  }
};

module.exports = validadeToken;