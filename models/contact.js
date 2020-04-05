const {
    model,
    mongoose
} = require("mongoose");
var timestamps = require('mongoose-timestamp');

const Contact = model('Contact', {
    content: {
        type: String,
        required: true,
    },
})
module.exports = Contact;