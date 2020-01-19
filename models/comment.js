'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    article_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    // if its hasMany then the foreignKey is from other table
    // if its belongsTo then the foreignKey is from this table
    comment.belongsTo(models.article, {
      as: "insideArticle",
      foreignKey: "article_id",
    }),
    comment.belongsTo(models.user, {
      as: "CreatedBy",
      foreignKey: "user_id",
    })
  };
  return comment;
};