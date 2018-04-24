var express = require('express');
var router = express.Router();
const Product = require('../db/models/Product');

router.get('/', (req, res, next) => {
    Product.findAll()
        .then(products => res.json(products));
});

router.get('/productId', (req, res, next) => {
    Product.findOne({
        where: { id: req.params.productId }
    })
    .then(product => res.json(product));
});

module.exports = router;