const services = require('../services');

const { getAllUsers: getAllUsersServ } = services;

module.exports = async (_req, res) => {
  try {
    const usersData = await getAllUsersServ();
    return res.status(200).json(usersData);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};
