const {
    model,
    mongoose
} = require('mongoose');

const Post = model('Post', {
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