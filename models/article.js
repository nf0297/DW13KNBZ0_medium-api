'use strict';
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('article', {
    title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    image: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    is_published: DataTypes.BOOLEAN,
    is_active: DataTypes.BOOLEAN
  }, {});
  article.associate = function(models) {
    // associations can be defined here
    // if its hasMany then the foreignKey is from other table
    // if its belongsTo then the foreignKey is from this table
    article.hasMany(models.comment, {
      as: "Comment",
      foreignKey: "article_id",
    }),
    article.belongsTo(models.category, {
      as: "Category",
      foreignKey: "category_id",
    }),
    article.belongsTo(models.user, {
      as: "CreatedBy",
      foreignKey: "user_id",
    })
  };
  return article;
};