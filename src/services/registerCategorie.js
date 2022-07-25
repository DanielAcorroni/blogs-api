const db = require('../database/models');

const { Category } = db;

module.exports = async (name) => {
  const createdCategorie = await Category.create({ name });
  return createdCategorie.dataValues;
};