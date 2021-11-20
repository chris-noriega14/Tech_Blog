const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const seedUsers = require('./userData.js');
const seedPosts = require('./postData.js');z

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
