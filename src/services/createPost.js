const db = require('../database/models');

const { BlogPost, PostCategory } = db;

module.exports = async ({ title, content, categoryIds, userId }) => {
  const createdPost = await BlogPost.create({ title, content, categoryIds, userId });

  await Promise.all(categoryIds
    .map((id) => PostCategory.create({ postId: createdPost.dataValues.id, categoryId: id })));

  return createdPost.dataValues;
};