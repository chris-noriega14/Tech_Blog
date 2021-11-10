const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.js');
const postData = require('./postData.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  const users = await User.bulkCreate(userData, {
    // individualHooks: true,
    // returning: true,
  });

  for(const post of postData) {
    await Post.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  
  process.exit(0);
};

seedDatabase();
