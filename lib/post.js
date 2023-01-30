'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@db/favo-log',
  {
    logging: false
  }
);
const Post = sequelize.define(
  'Post',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cat: {
      type: DataTypes.TEXT
    },
    content: {
      type: DataTypes.TEXT
    },
    postedBy: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

Post.sync({ alter:true });
// dbの内容に変更なければ()内空でOK
module.exports = Post;