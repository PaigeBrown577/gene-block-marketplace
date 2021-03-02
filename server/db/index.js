const mongoose = require('mongoose')

const url = 'mongodb+srv://rghosh:bmarket@block-marketplace.0z7u0.mongodb.net/bmarket_db?retryWrites=true';

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology : true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
