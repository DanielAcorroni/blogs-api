const authJWT = require('../auth');
const services = require('../services');

const { generateJWT } = authJWT;
const { registerUser: registerUserServ } = services;

module.exports = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await registerUserServ({ displayName, email, password, image });
    const token = generateJWT(newUser);
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};