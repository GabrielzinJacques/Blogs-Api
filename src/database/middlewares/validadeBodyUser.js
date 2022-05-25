const joi = require('joi');

const schema = joi.object({
  displayName: joi.string().min(8).messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: joi.string().email().messages({
    'string.min': '"email" must be a valid email',
  }),
  password: joi.string().min(6).messages({
    'string.min': '"password" length must be at least 6 characters long',
  }),
  image: joi.string().required(),
});

const validadeBodyUser = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

module.exports = validadeBodyUser;
