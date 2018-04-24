# DC-redux-shopping-site
Backend for shopping site

# Route Structure

GET:
There are currently four main endpoints to fetch from:
 * /users
 * /products
 * /category
 
 At their base route, they will return an entire json payload of all DB entries.
 
 /users, /products, and /category will accept an additional ID parameter (e.g. /users/1 will return a user from the DB with the ID of one).
 
 * /users/:userId/cart --- will return all items that a user has added to their cart.
 
 * /category/:id --- will return all products within that specific category id.
 
 POST:
 * /users/:userId/cart/add/product/:productId
 
 This endpoint will add a product to a user's cart.
