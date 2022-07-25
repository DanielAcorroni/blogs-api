const { DATE } = require('sequelize');
const services = require('../services');

const { createPost: createPostServ } = services;

module.exports = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;
  try {
    const createdPost = await createPostServ({
      title,
      content,
      categoryIds,
      published: new DATE(),
      updated: new DATE(),
      userId,
    });
    return res.status(201).json(createdPost);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};