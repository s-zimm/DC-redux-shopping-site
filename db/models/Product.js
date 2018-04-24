const Sequelize = require('sequelize');
const db = require('../db');
// const Category = require('./Category');
const Cart = require('./Cart');

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.FLOAT
    }
});

Product.hasOne(Cart, { as: 'product' })
// Product.belongsTo(Category);

module.exports = Product;