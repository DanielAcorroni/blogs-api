require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require('../database/models');

const { User } = db;

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decodeToken = jwt.verify(token, secret);
    const user = await User.findOne({ where: { email: decodeToken.data.email } });
    const { password: passDB, ...userWithNoPassword } = user.dataValues;
    req.user = userWithNoPassword;
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
