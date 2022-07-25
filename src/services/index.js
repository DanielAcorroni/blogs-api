const login = require('./login');
const registerUser = require('./registerUser');
const registerCategorie = require('./registerCategorie');
const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');
const getAllCategories = require('./getAllCategories');
const createPost = require('./createPost');

module.exports = {
  login,
  registerUser,
  getAllUsers,
  getUserById,
  registerCategorie,
  getAllCategories,
  createPost,
};