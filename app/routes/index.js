const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("main", {
    title: "Dito tayo magpractice",
    message: "kapag nagpush ka sa github matic na mag-aappear yun dito",
    note: "note note notice ",
  });
});

router.get("/welcome", (req, res) => {
  res.render("okok", {
    title: "bio",
    ign: "maku",
    nickname: "Oca",
    age: "20",
    address: "inarawan",
    city: "antipolo",
    course: "COMPUTER ENGINEERING",
    email: "MARKRJOCA00@gmail.com",
    contact: "09000000000",
    github: "MAKRJOCA00",
    sentence: "all right reserve 2023 - 2024",
    sentence1: "Future Webdeveloper ,It Specialits or Game Developer",
  });
});

router.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
