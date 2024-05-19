const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main", {
    title: "My Node App with EJS",
    message: "Hello, this is your embedded message!",
  });
});

router.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
