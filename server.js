const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.use(
  bodyparser.urlencoded({
    extended: true
  })
);

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + '/public'));

let posts = [];

app.get("/", (req, res) => {
  res.render("blog", {
    posts: posts
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };

  posts.push(post);

  res.redirect("/");
});

app.get("/posts/:postName", (req, res) => {
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(post => {
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("posts", {
        title: post.title,
        content: post.content
      });
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});