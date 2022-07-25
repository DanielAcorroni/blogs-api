const login = require('./login');
const registerUser = require('./registerUser');
const registerCategorie = require('./registerCategorie');
const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');
const getAllCategories = require('./getAllCategories');

module.exports = {
  login,
  registerUser,
  getAllUsers,
  getUserById,
  registerCategorie,
  getAllCategories,
};