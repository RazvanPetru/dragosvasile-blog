const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const moment = require("moment");
const adminBro = require("admin-bro");
const expressSession = require("express-session");
const mongoose = require("mongoose");
const richText = require("rich-text");

const app = express();

app.use(bodyparser.json());

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const About = require('./models/about');
const Post = require("./models/post");

const adminRouter = require("./routes/admin.router");
const contactRouter = require("./routes/contact.router");
const aboutRouter = require("./routes/about.router");

app.use("/admin", adminRouter);
app.use(contactRouter);
app.use(aboutRouter);

app.get("/", (req, res) => {
  Post.find({}, function (err, posts) {
    res.render("blog", {
      posts: posts,
      moment: moment,
    });
  });
});

app.get("/posts/:postId", function (req, res) {
  const requestedPostId = req.params.postId;

  Post.findOne({
      _id: requestedPostId,
    },
    function (err, post) {
      res.render("posts", {
        title: post.title,
        description: post.description,
        moment: moment,
      });
    }
  );
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});