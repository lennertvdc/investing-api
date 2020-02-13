const Sequelize = require('sequelize');
const db = require('../database');

const Investment = db.define('investment', {
    updateDate: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        field: 'updateDate'
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'name'
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: true,
        field: 'price'
    }
},
{
    tableName: 'investments'
});

module.exports = Investment;