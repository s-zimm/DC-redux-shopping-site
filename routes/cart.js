var express = require('express');
var router = express.Router();
const Product = require('../db/models/Product');
const User = require('../db/models/User');
const Cart = require('../db/models/Cart');

router.post('/add/user/:userId/product/:productId', (req, res, next) => {
    Cart.create({ userId: req.params.userId, productId: req.params.productId })
        .then(cart => res.send(cart));
});

router.get('/user/:userId', (req, res, next) => {
    Cart.findAll({
        where: {
            userId: req.params.userId
        }
    })
    .then(cart => {
        if (cart.length > 0) {
            res.send(cart)
        } else {
            res.send('No items in cart')
        }
    })
});

module.exports = router;