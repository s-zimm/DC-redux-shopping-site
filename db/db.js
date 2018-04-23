const Sequelize = require('sequelize');
const sequelize = new Sequelize('redux-shopping-cart', 'sethzimmerman', '', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;