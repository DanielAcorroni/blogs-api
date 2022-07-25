const services = require('../services');

const { getAllCategories } = services;

const doesCategorieExist = async ({ idEdit, categoryIds }) => {
  if (idEdit) {
    return true;
  }
  const allCategories = await getAllCategories();
  const findedCategories = [];
  categoryIds.forEach((id) => {
    const isCategorieFound = allCategories.some((category) => category.id === id);
    if (isCategorieFound) {
      findedCategories.push(id);
    }
  });
  if (findedCategories.length === categoryIds.length) {
    return true;
  }
  return false;
};

const isCategoryIdsOnCreateEmpty = ({ idEdit, categoryIds }) => {
  if (idEdit && categoryIds) {
    return 'Categories cannot be edited';
  }
  if (!idEdit && categoryIds === undefined) {
    return '"categoryIds" is required';
  }
  return false;
};

module.exports = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { id: idEdit } = req.params;
  const categoryIdsOnCreate = isCategoryIdsOnCreateEmpty({ idEdit, categoryIds });
  if (categoryIdsOnCreate) {
    return res.status(400).json({ message: categoryIdsOnCreate });
  }
  const existingCategories = await doesCategorieExist({ idEdit, categoryIds });
  if (!existingCategories) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  if ((title || content) === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};