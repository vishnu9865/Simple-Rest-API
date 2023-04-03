// dotenv for process environment variables
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to database simple-rest-api
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to Database!'))
  .catch((error) => console.log(error));

// setup express middleware
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

// use separate route handler for customers
const customerRouter = require('./routes/customerRouter');
app.use('/api/customer', customerRouter);

// base endpoint for validation
app.get('/api', ( req, res) => {
  res.json({
    'API Name': 'Simple-Rest-API',
    'Author':'S.Jeyavishnu',
    'Status':'Active'
  })
});

// bootstrapping server
app.listen( process.env.PORT || 3000, () => console.log('Server Started at port 3000.'));