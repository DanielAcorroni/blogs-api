const db = require('../database/models');

const { Category } = db;

module.exports = async () => Category.findAll();