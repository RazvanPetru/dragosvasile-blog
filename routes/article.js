const express = require("express");
const path = require("path");

const router = express.Router();

router.use('/article', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/post.html'));
});

module.exports = router;