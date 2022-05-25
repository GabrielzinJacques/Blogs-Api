'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostCategoriesTable = queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });

    return PostCategoriesTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('PostCategories')
  }
};
