var express = require('express');
var router = express.Router();
const User = require('../db/models/User');

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

module.exports = router;
