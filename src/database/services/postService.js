const { BlogPost, Category } = require('../models');

// references https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
const validateCategories = async (categories) => {
  const { count } = await Category.findAndCountAll({ where: { id: categories } });
  if (count === 0) {
    const error = {
      status: 400,
      message: '"categoryIds" not found',
    };
    throw error;
  }
};

const createPost = async (post) => {
  await validateCategories(post.categoryIds);
  const NewPost = await BlogPost.create({
    title: post.title,
    content: post.content,
    userId: 1,
    published: new Date(),
    updated: new Date(),
  });
  await NewPost.addCategories(post.categoryIds);
  return NewPost;
};

module.exports = {
  createPost,
};