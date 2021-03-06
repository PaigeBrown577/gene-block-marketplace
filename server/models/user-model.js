const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
            email: {type: String, required: true},
            password: {type: String, required: true},
            name: {type: String, required: true},
            year: {type: String, required: true},
            birthday: {type: String, required: true},
            address: {type: String, required: true},
            phone: {type: String, required: true},

    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)
