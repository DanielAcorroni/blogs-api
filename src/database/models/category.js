const Category = (sequelize, DataTypes) => {
  const tableCategory = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return tableCategory;
};

module.exports = Category;