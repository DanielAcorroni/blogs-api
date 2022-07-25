const db = require('../database/models');

const { User } = db;

module.exports = async (id) => {
  const userByIdData = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return userByIdData;
};