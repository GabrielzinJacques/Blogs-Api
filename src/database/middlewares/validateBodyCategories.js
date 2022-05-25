const joi = require('joi');

const schema = joi.object({
    name: joi.string().required(),
  });

const validateBodyCategories = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

module.exports = validateBodyCategories;