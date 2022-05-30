const validateBodyLogin = require('./validateBodyLogin');
const validateBodyUser = require('./validateBodyUser');
const validateToken = require('./validateToken');
const validateBodyCategories = require('./validateBodyCategories');
const validateBodyPost = require('./validateBodyPost');

module.exports = {
  valid: {
    validateBodyLogin,
    validateBodyUser,
    validateToken,
    validateBodyCategories,
    validateBodyPost },
};