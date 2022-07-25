const PostCategory = (sequelize, DataTypes) => {
  const tablePostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'BlogPost',
        key: 'id',
      }
    },
    categoryId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'id',
      }
    },
  },
  { timestamps: false });
  tablePostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: tablePostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'post',
      through: tablePostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return tablePostCategory;
};

module.exports = PostCategory;