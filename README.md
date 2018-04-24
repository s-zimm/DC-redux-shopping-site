# DC-redux-shopping-site
Backend for shopping site

# Route Structure
There are currently four main endpoints to fetch from:
 * /users
 * /products
 * /category
 * /cart
 
 At their base route, they will return an entire json payload of all DB entries.
 
 /users, /products, and /category will accept an additional ID parameter (e.g. /users/1 will return a user from the DB with the ID of one).
 
 HOWEVER: /category/:id will return all products within that specific category id.
