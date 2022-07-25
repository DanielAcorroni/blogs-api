const db = require('../database/models');

const { User } = db;

const isEmailRegistered = async ({ email, displayName }) => {
  const emailRegistered = await User.findOne({ where: { email } });
  if (displayName && emailRegistered) {
    return true;
  }
  return false;
};

module.exports = async (req, res, next) => {
  const { email, displayName } = req.body;
  const regexEmail = /\S+@\S+\.\S+/;
  if (email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (email === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  const registerUserExist = await isEmailRegistered({ email, displayName });
  if (registerUserExist) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};
