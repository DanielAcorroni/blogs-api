const express = require('express');
const bodyParser = require('body-parser');
const validations = require('./middlewares');
const controllers = require('./controllers');
const authJWT = require('./auth');

const { validateJWT } = authJWT;

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

const validatePost = [
  validateJWT,
  validations.validatePostInfo,
];

app.post('/user', validateRegisterUser, controllers.registerUser);

app.post('/login', validateLogin, controllers.login);

app.get('/user', validateJWT, controllers.getAllUsers);

app.get('/user/:id', validateJWT, controllers.getUserById);

app.post('/categories', validateJWT, controllers.registerCategorie);

app.get('/categories', validateJWT, controllers.getAllCategories);

app.post('/post', validatePost, controllers.createPost);

module.exports = app;
