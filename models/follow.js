'use strict';
module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define('follow', {
    user_id: DataTypes.INTEGER,
    follow_user_id: DataTypes.INTEGER
  }, {});
  follow.associate = function(models) {
    // associations can be defined here
    // if its hasMany then the foreignKey is from other table
    // if its belongsTo then the foreignKey is from this table
    follow.belongsTo(models.user, {
      as: "Followed",
      foreignKey: "follow_user_id",
    })
    follow.belongsTo(models.user, {
      as: "Following",
      foreignKey: "follow_user_id",
    })
    follow.belongsTo(models.user, {
      as: "User",
      foreignKey: "user_id"
    })
    follow.belongsTo(models.user, {
      as: "Follower",
      foreignKey: "user_id"
    })
  };
  return follow;
};