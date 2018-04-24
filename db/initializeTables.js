const User = require('./models/User');
const Category = require('./models/Category');
const Product = require('./models/Product');
const Cart = require('./models/Cart');

User.sync({ force: true })
   .then(() => Category.sync({ force: true }))
   .then(() => Product.sync({ force: true }))
   .then(() => Cart.sync({ force: true }))

 