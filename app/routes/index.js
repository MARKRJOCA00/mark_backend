const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main", {
    title: "Dito tayo magpractice",
    message: "kapag nagpush ka sa github matic na mag-aappear yun dito",
    note:"note note notice ",aku
  });
});

router.get("/welcome",(req,res) =>{
  res.render("okok",{
    title:"bio",
    ign:"maku",
    age:"20",
    address:"inarawan",
    city:"antipolo",
    course:"cpe",
    food:"chicken",
    sport:"badminton",
    game:"Ml",
    anime:"ghibli",
    email:"MARKRJOCA00@gmail.com",
    contact:"09000000000",
    github:"MAKRJOCA00",
    chicksentence:"chicken is my favorite food because of jollibee",
    sportsentence:"badminton kasi wala trip ko lang",
    gamesentence:"nakakastress laruin whahaha",
    animesentence:"ang ganda kasi whahaha ",
    sentence:"all right reserve 2023 - 2024",

  })
})


router.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
