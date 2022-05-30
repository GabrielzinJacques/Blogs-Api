const postService = require('../services/postService');

const createPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  try {
    const post = await postService.createPost({ title, content, categoryIds });
    return res.status(201).json(post);
  } catch (error) {
    console.log('Err create Post', error.message);
    next(error);
  }
};

module.exports = {
  createPost,
};