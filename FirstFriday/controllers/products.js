const { products } = require('../data/products');


const getProducts = (req, res) => {
    res.json(products).status(200)
};

const createProducts = (req, res) => {
    const newProduct = req.body
    products.push(newProduct)
    res.json(newProduct).status(201)
};

const getProductById = (req, res) => {
    const productId = req.params.id;
    const product = products.find(product => product.id === Number(productId));
    res.json(product).status(200);
};

const updateProduct = (req, res) => {
    const updatedProduct = req.body
    const productId = req.params.id 

    const product = products.find(product => product.id === Number(productId));
    if (updatedProduct.name && updatedProduct.price) {
        product.name = updateProduct.name
        product.price = updatedProduct.price
        res.json({'product': updatedProduct, 'success': 'Product updated successfully'})
    } else {
        res.json({'error': 'You need to provide the name and price of the product'})
    }
};

const deleteProduct = (req, res) => {
    const productId = req.params.id;
    const filteredProducts = products.filter(product => product.id !== Number(productId))
    res.json(filteredProducts).status(204)
}

module.exports = {
    getProducts,
    createProducts,
    getProductById,
    updateProduct,
    deleteProduct
}