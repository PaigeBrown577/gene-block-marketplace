const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: false },
        meeting_location: {type : String, require: true},
        tag: {type : String, require: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('posts', Post)
