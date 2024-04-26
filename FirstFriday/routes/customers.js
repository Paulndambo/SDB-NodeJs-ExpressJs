const express = require('express');
const { getCustomers, createCustomer, getCustomerById, updateCustomer, deleteCustomer, patchCustomer } = require('../controllers/customers');

const router = express.Router();

router.get('/', getCustomers);
router.post('/', createCustomer);
router.get('/:id', getCustomerById);
router.put('/:id', updateCustomer);
router.patch('/:id', patchCustomer);
router.delete('/:id', deleteCustomer);


module.exports = router