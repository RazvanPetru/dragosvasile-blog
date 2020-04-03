const express = require('express');

const router = express.Router();

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.get("/compose", (req, res) => {
    res.render("compose");
});

router.post("/compose", (req, res) => {
    const post = new Post({
        title: req.body.postTitle,
        content: req.body.postBody
    });


    post.save(function (err) {
        if (!err) {
            res.redirect("/");
        }
    });
});

module.exports = router;