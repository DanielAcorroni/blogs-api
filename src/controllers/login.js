const authJWT = require('../auth');
const services = require('../services');

const { generateJWT } = authJWT;
const { login: loginServ } = services;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loggedUser = await loginServ({ email, password });
    if (loggedUser === undefined) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = generateJWT(loggedUser);
    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};