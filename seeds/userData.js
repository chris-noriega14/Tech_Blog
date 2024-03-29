const { User } = require('../models');

const userData = [
  {
    name: "Test1",
    email: "test1@test.com",
    password: "Test12345",
  },
  {
    name: "Test2",
    email: "test2@test.com",
    password: "Test12345",
  },
  {
    name: "Test3",
    email: "test3@test.com",
    password: "Test12345",
  },
  {
    name: "Test4",
    email: "test4@test.com",
    password: "Test12345",
  },
  {
    name: "Test5",
    email: "test5@test.com",
    password: "Test12345",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
