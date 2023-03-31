// require('dotenv').config();
const mongoose = require('mongoose');

async function initializeDB( mongoose) {
  await mongoose.connect(process.env.MONGODB_URI).then(
    () => console.log('Connected to DB.'),
    (error) => console.log(error));
  return mongoose;
}

exports.mongoose = initializeDB(mongoose);