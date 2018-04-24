const User = require('./models/User');
const Category = require('./models/Category');
const Product = require('./models/Product');
const Cart = require('./models/Cart');

User.bulkCreate([
    { firstname: 'Seth', lastname: 'Zim' },
    { firstname: 'Jonathan', lastname: 'Martin' },
    { firstname: 'Joshua', lastname: 'Martin' }
])
.then(() => {
    Category.bulkCreate([
        { name: 'Technology' },
        { name: 'Coffee' },
        { name: 'Educational' },
        { name: 'Board Games' }
    ])
})
.then(() => {
    Product.bulkCreate([
        { name: 'Coffee Maker', categoryId: 2, price: 19.99 },
        { name: 'Redux Help', categoryId: 3, price: 9.99  },
        { name: 'Super Amazing Computer', categoryId: 1, price: 10000 },
        { name: 'Werewolf', categoryId: 4, price: 14.99 }
    ])
})