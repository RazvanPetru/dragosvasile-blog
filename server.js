const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bodyparser = require("body-parser");
const app = express();

app.use("/public", express.static("public"));

const articleRouter = require('./routes/article');

app.use('/article', articleRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});