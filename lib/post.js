'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const dialectOptions = {
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
};
const sequelize = process.env.DATABASE_URL ?
  // 本番環境
  new Sequelize(
    process.env.DATABASE_URL,
    {
      logging: false,
      dialectOptions
    }
  )
  :
  // 開発環境
  new Sequelize(
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