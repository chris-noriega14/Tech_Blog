const { Post } = require('../models');

const postData = [
  {
    title: 'Plain Shorts',
    contents: 24.99,
    username: "Test1",
    user_id: 1,
  },
  {
    title: 'Plain T-Shirt',
    contents: 34.99,
    username: "Test2",
    user_id: 2,
  },
  {
    title: 'Plain Pants',
    contents: 44.99,
    username: "Test2",
    user_id: 2,
  },
  {
    title: 'Plain Shoes',
    contents: 54.99,
    username: "Test1",
    user_id: 1,
  },
  {
    title: 'Plain Hat',
    contents: 64.99,
    username: "Test3",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
