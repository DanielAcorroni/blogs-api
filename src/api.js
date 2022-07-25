const express = require('express');
const bodyParser = require('body-parser');
const validations = require('./middlewares');
const controllers = require('./controllers');

const app = express();
app.use(bodyParser.json());

const validateLogin = [
  validations.validateEmail,
  validations.validatePassword,
];

const validateRegisterUser = [
  validations.validateDisplayName,
  validations.validatePassword,
  validations.validateEmail,
];

app.post('/user', validateRegisterUser, controllers.registerUser);

app.post('/login', validateLogin, controllers.login);

module.exports = app;
