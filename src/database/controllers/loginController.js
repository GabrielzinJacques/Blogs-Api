const loginService = require('../services/loginService');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const token = await loginService.login(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    console.log('Err login', error.message);
    next(error);
  }
};

module.exports = {
  login,
};