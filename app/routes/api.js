const express = require("express");
const router = express.Router();

router.get("/data", (req, res) => {
  res.json({ message: "eto yung api hahahah" });
});

module.exports = router;
