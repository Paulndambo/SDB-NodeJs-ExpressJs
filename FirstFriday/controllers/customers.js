const { customers } = require('../data/customers');

const getCustomers = (req, res) => {
    res.json(customers).status(200)
};

const createCustomer = (req, res) => {
    const data = req.body
    customers.push(data)
    res.json(customers).status(201)
}

const getCustomerById = (req, res) => {
    const { id } = req.params
    const customer = customers.find(customer => customer.id === Number(id))
    res.json(customer).status(200)
}

const updateCustomer = (req, res) => {
    const { id } = req.params
    const data = req.body
    const customer = customers.find(customer => customer.id === Number(id))

    if (data.name && data.gender) {
        customer.name = data.name
        customer.gender = data.gender
        res.json(customer).status(201)
    } else {
        res.json({'error': 'Please provide name and gender' }).status(400)
    }
}

// patch a customer
const patchCustomer = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const customer = customers.find(customer => customer.id === Number(id));

    if (data.name && data.gender) {
        customer.name = data.name
        customer.gender = data.gender
        res.json(customer).status(201)
    } else if(data.name) {
        customer.name = data.name
        res.json(customer).status(201)
    } else if(data.gender) {
        customer.gender = data.gender
        res.json(customer).status(201)
    } else {
        res.json({'error': 'Please provide name and gender' }).status(400)
    }

}


// delete a customer
const deleteCustomer = (req, res) => {
    const customerId = req.params.id;
    const filteredCustomers = customers.find(customer => customer.id !== Number(customerId))
    res.json(filteredCustomers).status(204)
}

module.exports = {
    getCustomers,
    createCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
    patchCustomer
}