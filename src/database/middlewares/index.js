const validateBodyLogin = require('./validadeBodyLogin');
const validadeBodyUser = require('./validadeBodyUser');

module.exports = {
  valid: {
    validateBodyLogin,
    validadeBodyUser,
  },
};