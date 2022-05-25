'use strict';

const Category = (sequelize, DataTypes) => {

  const Category = sequelize.define('Category', {

    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,

  }, {
    timestamps: false,
  })
  return Category;
}

module.exports = Category;