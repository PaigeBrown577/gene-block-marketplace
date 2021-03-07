const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
            displayName: {type: String, required: true},
            username: { type: String, required: false},
            tag: {type : String, require: true},
            date: {type: String, require: true},
            title: { type: String, required: true },
            price: { type: Number, required: true },
            text: { type: String, required: false },
            image: {type: String, required: false},
            meeting_location: {type : String, require: true},

    },
    { timestamps: true },
)

module.exports = mongoose.model('posts', Post)
