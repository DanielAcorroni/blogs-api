const services = require('../services');

const { getUserById: getUserByIdServ } = services;

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const userByIdData = await getUserByIdServ(id);
    if (!userByIdData) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(userByIdData);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};