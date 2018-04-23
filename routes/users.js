var express = require('express');
var router = express.Router();
const User = require('../db/models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll()
    .then(users => res.send(users))
    .catch(err => next())
});

router.get('/:userId', (req, res, next) => {
  User.findOne({ 
    where: {
      id: req.params.userId
    }
  })
  .then(user => res.send(user))
})

module.exports = router;
