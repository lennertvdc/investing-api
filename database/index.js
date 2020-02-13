require('dotenv').config();

const Sequelize = require('sequelize');

module.exports =  new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  define: {
    timestamps: false
  },

  host: process.env.DB_HOST,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});