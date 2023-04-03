const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// CREATE customer
router.post('/', async (req, res) => {
  const customer = new Customer({
    name: req.body.name,
    email: req.body.email,
    company: req.body.company
  });
  await customer.save()
        .then(() => res.status(201).json('CREATED'))
        .catch(err => res.status(400).json({message: err.message}));
});

// GET all customers
router.get('/', async (req, res) => {
  res.json(await Customer.find());
});

// GET customer by id
router.get('/:customerID', (req, res) => {
  Customer.findOne({_id: req.params.customerID})
          .then( docs => res.json(docs))
          .catch( error => res.status(400).json({message: error.message}));
});

// PUT customer (update) by id
router.patch('/:customerID', async ( req, res) => {
  try {
    await Customer.findByIdAndUpdate( 
      req.params.customerID,
      {
        name: req.body.name,
        email: req.body.email,
        company: req.body.company
      }
    );
    const doc = await Customer.findById(req.params.customerID);
    res.status(200).json(doc);
  } catch( error) {
    res.status(400).json({message: error.message});
  }
});

// DELETE customer by id
router.delete('/:customerID', async ( req, res) => {
  try {
    const deletedDoc = await Customer.findByIdAndDelete(req.params.customerID);
    res.status(204).json(deletedDoc);
  } catch( error) {
    res.status(400).json({messsage: error.message});
  }
});

module.exports = router;