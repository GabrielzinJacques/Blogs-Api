const joi = require('joi');

const body = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
  });

const validateBodyLogin = (req, res, next) => {
  const { error } = body.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = validateBodyLogin;