'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {});
  category.associate = function(models) {
    // associations can be defined here
    // if its hasMany then the foreignKey is from other table
    // if its belongsTo then the foreignKey is from this table
    category.hasMany(models.article, {
      as: "Category",
      foreignKey: "category_id",
    })
  };
  return category;
};