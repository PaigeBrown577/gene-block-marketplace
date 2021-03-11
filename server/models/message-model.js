const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Message = new Schema(
    {
            toEmail: {type: String, required: true},
            fromEmail: {type: String, required: true},
            subject: {type: String, required: false},
            text: {type: String, required: false},
    },
    { timestamps: true },
)

module.exports = mongoose.model('messages', Message)
