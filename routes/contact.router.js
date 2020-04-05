const express = require('express');

const router = express.Router();
const Contact = require('../models/contact');

router.get("/contact", (req, res) => {
    Contact.findOne({}, (err, contact) => {
        res.render('../views/contact', {
            contact: contact.content
        })
    })
});

module.exports = router;