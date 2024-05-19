const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main", {
    title: "Dito tayo magpractice",
    message: "kapag nagpush ka sa github matic na mag-aappear yun dito",
  });
});

router.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
