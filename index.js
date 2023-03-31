require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

app.get( '/', ( req, res) => {
  res.json({
    'API Name': 'Simple-Rest-API',
    'Author':'S.Jeyavishnu',
    'Status':'Active'
  })
});

app.listen( process.env.PORT || 3000, () => console.log('Server Started at port 3000.'));