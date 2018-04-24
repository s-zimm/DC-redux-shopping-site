var express = require('express');
var router = express.Router();
const User = require('../db/models/User');
const Cart = require('../db/models/Cart');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll()
    .then(users => res.json(users))
    .catch(err => next());
});

router.get('/:userId', (req, res, next) => {
  User.findOne({ 
    where: {
      id: req.params.userId
    }
  })
  .then(user => res.json(user));
});

router.post('/:userId/delete', (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.userId
    }
  })
  .then(user => res.json(user));
});

router.get('/:userId/cart', (req, res, next) => {
	Cart.findAll({
        where: {
            userId: req.params.userId
        }
    })
    .then(cart => {
        if (cart.length > 0) {
            res.json(cart)
        } else {
            res.send('No items in cart')
        }
    })
})

router.post('/:userId/cart/add/product/:productId', (req, res, next) => {
  Cart.create({ userId: req.params.userId, productId: req.params.productId })
    .then(cart => res.json(cart));
});

module.exports = router;
