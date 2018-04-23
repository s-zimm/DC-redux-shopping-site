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
        { name: 'Educational' }
    ])
})
.then(() => {
    Product.bulkCreate([
        { name: 'Coffee Maker', categoryId: 2 },
        { name: 'Redux Help', categoryId: 3 },
        { name: 'Super Amazing Computer', categoryId: 1 }
    ])
})