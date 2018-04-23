const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');

const Cart = db.define('cart', {
    paid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

Cart.belongsTo(User);

module.exports = Cart;