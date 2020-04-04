const {
    model,
    mongoose
} = require('mongoose');

const About = model('About', {
    content: {
        type: String,
        required: true
    }
})

module.exports = About;