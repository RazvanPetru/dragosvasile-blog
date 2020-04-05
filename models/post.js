const {
    model,
    mongoose
} = require('mongoose');

const Post = model('Post', {
    date: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

module.exports = Post;