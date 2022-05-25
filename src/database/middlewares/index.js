const validateBodyLogin = require('./validateBodyLogin');
const validateBodyUser = require('./validateBodyUser');
const validateToken = require('./validateToken');
const validateBodyCategories = require('./validateBodyCategories');

module.exports = {
  valid: {
    validateBodyLogin,
    validateBodyUser,
    validateToken,
    validateBodyCategories,
  },
};