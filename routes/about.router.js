const express = require("express");

const router = express.Router();
const About = require("../models/about");

router.get("/about", (req, res) => {
  About.findOne({}, (err, about) => {
    res.render("../views/about", {
      about: about.content,
    });
  });
});

module.exports = router;
