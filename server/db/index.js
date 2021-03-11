const mongoose = require('mongoose')
var path = require('path');
var dotenv = require('dotenv');
dotenv.config();

// const url = process.env.MONGO_URL;
const uri = 'mongodb+srv://rghosh:bmarket@block-marketplace.0z7u0.mongodb.net/bmarket_db?retryWrites=true&w=majority';


var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology : true })
    .catch(e => {
        console.error('Connection error', e.message);
    })

const db = mongoose.connection;

module.exports = db;
