const Sequelize = require('sequelize');
const db = require('../db');
const Category = require('./Category');
const Cart = require('./Cart');

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING
    }
});

Product.hasMany(Cart, { as: 'cart_item' })
// Product.hasOne(Category, { as: 'category' });

module.exports = Product;