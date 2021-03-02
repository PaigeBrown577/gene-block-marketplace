const mongoose = require('mongoose')

// var dotenv = require('dotenv');
// dotenv.config();

// const url = process.env.MONGO_URI;
const uri = 'mongodb+srv://rghosh:bmarket@block-marketplace.0z7u0.mongodb.net/bmarket_db?retryWrites=true&w=majority';

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology : true })
    .catch(e => {
        console.error('Connection error', e.message);
    })

const db = mongoose.connection;

module.exports = db;
