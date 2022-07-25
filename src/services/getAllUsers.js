const db = require('../database/models');

const { User } = db;

module.exports = async () => {
  const usersData = await User.findAll({ attributes: { exclude: ['password'] } });
  return usersData;
};
