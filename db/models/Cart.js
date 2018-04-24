const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');
// const Product = require('./Product');

const Cart = db.define('cart', {
    count: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
});

Cart.belongsTo(User);


module.exports = Cart;