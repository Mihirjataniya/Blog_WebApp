const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    tags: [
        {
            type: String,
            trim: true,
        },
    ],
},
    { timestamps: true }
)

module.exports = mongoose.model("Blog", blogSchema)