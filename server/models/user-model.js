const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
            email: {type: String, required: true},
            password: {type: String, required: true},
            name: {type: String, required: false},
            year: {type: String, required: false},
            birthday: {type: String, required: false},
            address: {type: String, required: false},
            phone: {type: String, required: false},

    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)
