const express = require('express');
const router = express.Router();
const Category = require('../db/models/Category');
const Product = require('../db/models/Product');

router.get('/', (req, res, next) => {
    Category.findAll()
        .then(cats => res.json(cats));
})

router.get('/:categoryId', (req, res, next) => {
    Product.findAll({ where: { categoryId: req.params.categoryId }})
        .then(products => res.json(products));
});

module.exports = router;