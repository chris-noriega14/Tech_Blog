const { Post } = require('../models');

const postData = [
  {
    title: 'Plain Shorts',
    contents: "Testing!",
    username: "Test1",
    user_id: 1,
  },
  {
    title: 'Plain T-Shirt',
    contents: "Testing!",
    username: "Test2",
    user_id: 2,
  },
  {
    title: 'Plain Pants',
    contents: "Testing!",
    username: "Test2",
    user_id: 2,
  },
  {
    title: 'Plain Shoes',
    contents: "Testing!",
    username: "Test1",
    user_id: 1,
  },
  {
    title: 'Plain Hat',
    contents: "Testing!",
    username: "Test3",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
