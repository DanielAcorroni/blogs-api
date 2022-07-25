const db = require('../database/models');

const { User } = db;

module.exports = async ({ email, password }) => {
  const loggedUser = await User.findOne({ where: { email, password } });
  if (loggedUser) {
    return loggedUser;
  }
  return undefined;
};