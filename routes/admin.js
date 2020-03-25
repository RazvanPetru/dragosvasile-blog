const express = require("express");
const path = require("path");

const router = express.Router();

router.use('/admin', (req, res) => {
    res.send('<h1>Admin page</h1>');
});

module.exports = router;