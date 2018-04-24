var express = require('express');
var router = express.Router();
const Product = require('../db/models/Product');
const User = require('../db/models/User');
const Cart = require('../db/models/Cart');

router.post('/add/product/:productId/user/:userId', (req, res, next) => {
    Cart.create({ userId: req.params.userId, productId: req.params.productId })
        .then(cart => res.send(cart));
});

module.exports = router;