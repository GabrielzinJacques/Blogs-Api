const validateBodyLogin = require('./validateBodyLogin');
const validadeBodyUser = require('./validateBodyUser');
const validateToken = require('./validateToken');

module.exports = {
  valid: {
    validateBodyLogin,
    validadeBodyUser,
    validateToken,
  },
};