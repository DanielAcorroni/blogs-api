require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '5h',
  algorithm: 'HS256',
};

module.exports = (user) => {
  const { password: passDB, ...userWithNoPassword } = user.dataValues;
  const token = jwt.sign({ data: userWithNoPassword }, secret, jwtConfig);
  return token;
};
