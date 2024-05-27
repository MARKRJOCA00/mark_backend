const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/data", (req, res) => {
  res.json({ message: "eto yung api hahahah" });
});

router.get("/users", userController.getUsers);

module.exports = router;
