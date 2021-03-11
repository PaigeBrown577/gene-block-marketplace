const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
            displayName: {type: String, required: true},
            userID: {type: String, required: true},
            tag: {type : String, require: true},
            date: {type: String, require: true},
            title: { type: String, required: true },
            price: { type: Number, required: true },
            text: { type: String, required: false },
            image: {
                data: Buffer,
                contentType: String
            },
            meeting_location: {type : String, require: true},
            email: {type: String, require: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('posts', Post)
