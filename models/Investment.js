const Sequelize = require('sequelize');
const db = require('../database');

const Investment = db.define('investment', {
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true,
        field: 'updated_at'
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