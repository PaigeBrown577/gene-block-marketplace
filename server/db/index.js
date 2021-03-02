const mongoose = require('mongoose')

var dotenv = require('dotenv');
dotenv.config();

const url = process.env.MONGO_URI;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology : true })
    .catch(e => {
        console.error('Connection error', e.message);
    })

const db = mongoose.connection;

module.exports = db;
