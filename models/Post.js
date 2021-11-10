const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contents: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
      comment: {
        type: DataTypes.STRING,  
      },
  },
  {
     sequelize,
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: 'post',
  }
);

module.exports = Post;