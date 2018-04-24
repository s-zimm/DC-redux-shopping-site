const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');
// const Product = require('./Product');

const Cart = db.define('cart', {
    
});

Cart.belongsTo(User);


module.exports = Cart;