const Sequelize = require('sequelize');
const db = require('../db');
const Product = require('./Product');

const Category = db.define('category', {
    name: {
        type: Sequelize.STRING
    }
});

Category.hasOne(Product, { as: 'category' })

module.exports = Category;