require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.use('/api', routes);

app.listen( process.env.PORT || 3000, () => console.log('Server Started at port 3000.'));