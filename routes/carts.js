const express = require('express');
const router = express.Router();
const Cart = require('../db/models/Cart');

router.post('/', (req, res, next) => {
    Cart.findOne({ where: {
        userId: req.body.userId, 
		productId: req.body.productId
    }})
    .then(cart => {
        if (!cart && req.body.userId && req.body.productId) {
            Cart.create({
                userId: req.body.userId, 
                productId: req.body.productId
            })
            .then(cart => res.json(cart));
        } else if (!req.body.userId || !req.body.productId) {
            res.send('Invalid request body')
        } else {
            res.send('Item already added');
        }
    });
});

router.put('/user/:userId/product/:productId', (req, res, next) => {
    Cart.findOne({ where: {
        userId: req.params.userId, 
		productId: req.params.productId
    }})
    .then(cart => {
        if (cart) {
            cart.update({
                count: req.body.count
            })
            .then(cart => res.json(cart))
        } else {
            res.send('Item not in the users cart')
        }
    });
});

module.exports = router;