const services = require('../services');

const { getAllCategories: getAllCategoriesServ } = services;

module.exports = async (req, res) => {
  try {
    const allCategories = await getAllCategoriesServ();
    return res.status(200).json(allCategories);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};