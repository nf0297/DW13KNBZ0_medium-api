'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fullname: DataTypes.STRING,
    image: DataTypes.TEXT,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.TEXT,
    is_active: DataTypes.BOOLEAN
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    // if its hasMany then the foreignKey is from other table
    // if its belongsTo then the foreignKey is from this table
    user.hasMany(models.article, {
      as: "Article",
      foreignKey: "user_id",
    })
    user.hasMany(models.comment, {
      as: "CommentedBy",
      foreignKey: "user_id",
    })
    user.hasMany(models.follow, {
      as: "Follower",
      foreignKey: "follow_user_id"
    })
    // user.hasOne(models.follow, {
    //   as: "User",
    //   foreignKey: "user_id"
    // })
  };
  return user;
};