const services = require('../services');

const { registerCategorie: registerCategorieServ } = services;

module.exports = async (req, res) => {
  try {
    const { name } = req.body;
    if (name === undefined) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const createdCategorie = await registerCategorieServ(name);
    return res.status(201).json(createdCategorie);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};