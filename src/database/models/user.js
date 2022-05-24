'use strict';

const User = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {

    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,

  }, {
    timestamps: false,
  })
  return User;
}

module.exports = User;