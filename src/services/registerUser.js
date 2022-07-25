const db = require('../database/models');

const { User } = db;

module.exports = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};