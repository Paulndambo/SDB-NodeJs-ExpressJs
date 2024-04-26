const express = require('express');
const morgan = require('morgan');

// http://localhost:5000
const PORT = 5000;
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));


// ROUTES
const productsRoutes = require('./routes/products');
const customerRoutes = require('./routes/customers');

// HTTP METHODS
/*
    1. GET - used to fetch resources from the server.
    2. POST - used to send data to the server.
    3. PUT/PATCH - updating data on the server.
    4. DELETE - to delete data
*/

// Home page route
// http://localhost:5000
app.get('/', (req, res) => {
    res.json({'message': 'The server is working a fine'}).status(200);
});

// http://localhost:5000/greet
app.get('/greet', (req, res) => {
    res.json({'message': 'Someone is greeting you'}).status(200)
});


// Products routes
// http://localhost:5000/products
app.use('/products', productsRoutes);

// customer routes
// http://localhost:5000/customers
app.use('/customers', customerRoutes)

// start the server
app.listen(PORT, () => {
    console.log(`The server is running on: http://localhost:${PORT}`)
})